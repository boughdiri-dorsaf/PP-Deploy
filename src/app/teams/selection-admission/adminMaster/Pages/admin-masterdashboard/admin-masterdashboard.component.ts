import { DiplomeService } from "./../../../User/Services/diplome.service";
import { EtablissementService } from "./../../../Admin/Services/etablissement.service";
import { ParametresService } from "./../../../Admin/Services/parametres.service";
import { AdminMasterServiceService } from "./../../Services/admin-master-service.service";
import { MasterService } from "./../../../Admin/Services/master.service";
import { Subscription } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Component, OnInit } from "@angular/core";
import { CursusService } from "../../../User/services/cursus.service";
import { Score } from "../../Models/score";
import moment from "moment";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-admin-masterdashboard",
  templateUrl: "./admin-masterdashboard.component.html",
  styleUrls: ["./admin-masterdashboard.component.scss"],
})
export class AdminMasterdashboardComponent implements OnInit {
  lstmasters = [];
  selectedmaster = null;
  selectedetab = "";
  selectedTable = 1;
  p;
  pageamount = 5;
  listeImporte = [];
  filtre = {
    candidature: "tout",
    etablissement: "aucune",
    diplomes: "aucune",
    domaines: "aucune",
    specialite: "aucune",
    score: { val: null, comparison: "" },
    status: [],
  };
  lstDemandesmasters = [];
  Score: Score = {
    Malus: { RED0: null, RED1: null, RED2: null, RED3: null, RED4: null },
    BnS: null,
    BnM: { Pass: null, AssB: null, Bien: null, TBien: null },
    BC: null,
    CdM: null,
    sem5: null,
    pfe: 0,
  };
  constructor(
    private param: ParametresService,
    private dip: DiplomeService,
    private ADM: AdminMasterServiceService,
    private MS: MasterService,
    private modal: NgbModal,
    private CS: CursusService,
    private Etab: EtablissementService
  ) {}
  sub: Subscription;
  noMaster = false;
  id = 0;
  nbetud = 0;
  etat = "4";
  lstetab = [];
  lstdip = [];
  lstdom = [];
  lstspec = [];
  checknumber() {
    if (this.nbetud > 101) {
      this.nbetud = 100;
    }
  }
  async selectTable(num: number) {
    this.selectedTable = num;
    let prom = new Promise(async (resolve) => {
      // await   resolve( this.refreshlist());
      resolve("done");
    }).then(() => {
      if (num == 2) {
        this.Mastersapps = this.Mastersapps.filter((el) => {
          return (
            el.edmlibelle == "Présélectionné" || el.edmlibelle == "Confirmé"
          );
        });
        console.log("done");
      } else if (num == 1) {
        this.refreshlist();
      } else if (num == 3) {
        this.Mastersapps = this.Mastersapps.filter((el) => {
          return el.edmlibelle == "Accepter";
        });
      }
    });
  }
  assignetab() {
    var index = this.lstetab.indexOf(this.selectedetab);
    var temp = this.lstetab[0];
    this.lstetab[0] = this.lstetab[index];
    this.lstetab[index] = temp;
    const orders = this.Mastersapps;

    const statuses = this.lstetab;
    const sortByRef = (orders, statuses) => {
      const sorter = (a, b) => {
        return (
          statuses.indexOf(a.code_etablissement) -
          statuses.indexOf(b.code_etablissement)
        );
      };
      orders.sort(sorter);
    };
    sortByRef(orders, statuses);
  }
  setEtat() {
    var sub: Subscription;
    for (let i = 0; i < this.nbetud; i++) {
      if (this.Mastersapps[i] != undefined) {
        var param = {
          id_etat_demande_master: this.etat,
          id_demande: this.Mastersapps[i].id_demande,
        };

        sub = this.MS.SetEtatDemandesMaster(param).subscribe(
          (val) => {
            console.log(i);
            if (i + 1 >= this.nbetud - 1) {
              console.log("here", this.Mastersapps[i].id_demande);
              setTimeout(() => {
                this.refreshlist();
              }, 1500);
              setTimeout(() => {}, 3000);
            }
            sub.unsubscribe();
          },
          (err) => {
            console.log("err", err);
          }
        );
      }
    }
    setTimeout(() => {
      this.filtrageGlobale();
    }, 5000);
  }
  ngOnInit() {
    this.dip.getDiplomes().subscribe((val) => {
      this.lstdip = val.results;
    });
    this.param.getDomains().subscribe((dip) => {
      console.log(dip);
      this.lstdom = dip.results;
    });
    this.param.getSpecialites().subscribe((spec) => {
      console.log(spec);
      this.lstspec = spec.results;
    });
    this.ADM.getAdminbyId(Number(localStorage.getItem("id"))).subscribe(
      (val) => {
        this.id = val.results[0].id_master;
        this.selectedmaster = this.id;
        this.ADM.getscoreId(this.id).subscribe((val) => {
          val.results.forEach((element) => {
            if (element.attr_score === "BC") {
              this.Score.BC = element.valeur;
            }
            if (element.attr_score === "AssB") {
              this.Score.BnM.AssB = element.valeur;
            }
            if (element.attr_score === "Bien") {
              this.Score.BnM.Bien = element.valeur;
            }
            if (element.attr_score === "Pass") {
              this.Score.BnM.Pass = element.valeur;
            }
            if (element.attr_score === "TBien") {
              this.Score.BnM.TBien = element.valeur;
            }
            if (element.attr_score === "BnS") {
              this.Score.BnS = element.valeur;
            }
            if (element.attr_score === "CdM") {
              this.Score.CdM = element.valeur;
            }
            if (element.attr_score === "RED0") {
              this.Score.Malus.RED0 = element.valeur;
            }
            if (element.attr_score === "RED1") {
              this.Score.Malus.RED1 = element.valeur;
            }
            if (element.attr_score === "RED2") {
              this.Score.Malus.RED2 = element.valeur;
            }
            if (element.attr_score === "RED3") {
              this.Score.Malus.RED3 = element.valeur;
            }
            if (element.attr_score === "RED4") {
              this.Score.Malus.RED4 = element.valeur;
            }
            if (element.attr_score === "sem5") {
              this.Score.sem5 = element.valeur;
            }
            if (element.attr_score === "pfe") {
              this.Score.pfe = element.valeur;
            }
          });
        });
        this.sub = this.MS.GetDemandesMasterByadminMaster(this.id).subscribe(
          async (val) => {
            for (let i = 0; i < val.results.length; i++) {
              await this.CS.getCursus(val.results[i].id_user).subscribe(
                (Cursuss) => {
                  val.results[i].lstCursus = Cursuss.results;
                }
              );
            }

            this.lstDemandesmasters = val.results;
            this.Etab.getetablissements().subscribe((etabli) => {
              etabli.results.forEach((element) => {
                this.lstetab.push(element.code_etablissement);
              });
              this.selectedmasterresult();
              setTimeout(() => {
                this.Mastersapps = this.scoreSort(this.Mastersapps);
                console.log(this.Mastersapps);
                /*  const orders = this.Mastersapps;

   const statuses = this.lstetab;
   const sortByRef = (orders, statuses) => {
      const sorter = (a, b) => {

         return statuses.indexOf(a.code_etablissement) - statuses.indexOf(b.code_etablissement);
      };
      orders.sort(sorter);
   };
   sortByRef(orders, statuses); */
              }, 800);
            });
          },
          (err) => {
            this.lstDemandesmasters = [];
          }
        );
      },
      (err) => {
        this.noMaster = true;
      }
    );

    this.Score = JSON.parse(localStorage.getItem("FormuleScore"));
    this.MS.getmasters().subscribe((val) => {
      this.lstmasters = val.results;
    });
  }
  refreshlist() {
    this.sub.unsubscribe();

    return (this.sub = this.MS.GetDemandesMasterByadminMaster(
      this.id
    ).subscribe(async (val) => {
      for (let i = 0; i < val.results.length; i++) {
        await this.CS.getCursus(val.results[i].id_user).subscribe((Cursuss) => {
          val.results[i].lstCursus = Cursuss.results;
        });
      }

      this.lstDemandesmasters = val.results;

      this.selectedmasterresult();
      setTimeout(() => {
        this.Mastersapps = this.scoreSort(this.Mastersapps);
        const orders = this.Mastersapps;
        const statuses = this.lstetab;
        const sortByRef = (orders, statuses) => {
          const sorter = (a, b) => {
            return (
              statuses.indexOf(a.code_etablissement) -
              statuses.indexOf(b.code_etablissement)
            );
          };
          orders.sort(sorter);
        };
        sortByRef(orders, statuses);
        this.scoreSort(this.Mastersapps);
      }, 800);
    }));
  }
  ChangerEtatDemandeMaster(item, idetat) {
    var param = { id_etat_demande_master: idetat, id_demande: item.id_demande };

    this.MS.SetEtatDemandesMaster(param).subscribe();
    this.refreshlist();
  }
  calculerScore(Demande) {
    //[(Moyenne ArithmetiquexMalus)*0.4+(Bonus Mention)*0.1+(Bonus Session)*0.1+(Bonus Credit)*0.1+(Bonus S5)*0.1]
    var moyArith = 0;
    var BM = 0;
    var BS = 0;
    var BC = 0;
    var Malus = 1;
    var sem5 = 0;

    if (this.Score) {
      if (this.Score.sem5) {
        sem5 = this.Score.sem5;
      }
      if (Demande.lstCursus != undefined) {
        Demande.lstCursus.forEach((Cursus) => {
          BC += Cursus.credit;
          if (Cursus.note_pfe != null) {
            moyArith += Cursus.note_pfe;
          }

          if (Cursus.session == "Principale") {
            BS += this.Score.BnS;
          }
          if (Cursus.mention == "Passable") {
            BM += this.Score.BnM.Pass;
          } else if (Cursus.mention == "Bien") {
            BM += this.Score.BnM.AssB;
          } else if (Cursus.mention == "Trés Bien") {
            BM += this.Score.BnM.Bien;
          } else if (Cursus.mention == "Excellent") {
            BM += this.Score.BnM.TBien;
          }
          if (Cursus.nlibelle == "3") {
            sem5 *= Cursus.moyenne;
          } else {
            moyArith += Cursus.moyenne;
          }
        });
      }
      if (Demande.session == "Principale") {
        BS += this.Score.BnS;
      }
      if (Demande.mention == "Passable") {
        BM += this.Score.BnM.Pass;
      } else if (Demande.mention == "Bien") {
        BM += this.Score.BnM.AssB;
      } else if (Demande.mention == "Trés Bien") {
        BM += this.Score.BnM.Bien;
      } else if (Demande.mention == "Excellent") {
        BM += this.Score.BnM.TBien;
      }
      moyArith += Demande.moyenne;
      if (this.Score.Malus.RED0 != null) {
        if (Demande.Redoublement == 0) {
          Malus = this.Score.Malus.RED0;
        }
      }
      if (this.Score.Malus.RED1 != null) {
        if (Demande.Redoublement == 1) {
          Malus = this.Score.Malus.RED1;
        }
      }
      if (this.Score.Malus.RED2 != null) {
        if (Demande.Redoublement == 2) {
          Malus = this.Score.Malus.RED2;
        }
      }
      if (this.Score.Malus.RED3 != null) {
        if (Demande.Redoublement == 3) {
          Malus = this.Score.Malus.RED3;
        }
      }
      if (this.Score.Malus.RED4 != null) {
        if (Demande.Redoublement == 4) {
          Malus = this.Score.Malus.RED4;
        }
      }
      return (
        moyArith * Malus * 0.5 + BM * 0.1 + BS * 0.1 + BC * 0.1 + sem5 * 0.2
      );
    } else {
      return 0;
    }
  }
  refresh = true;
  Mastersapps = [];
  selectedmasterresult() {
    this.Mastersapps = [];
    for (let i = 0; i < this.lstDemandesmasters.length; i++) {
      if (this.selectedmaster == this.lstDemandesmasters[i].id_master) {
        this.Mastersapps.push(this.lstDemandesmasters[i]);
      }
    }
  }
  exporterListe() {
    let LstStudents = [];
    this.Mastersapps.forEach((element) => {
      LstStudents.push({
        dateApp: moment(element.date_inscrit).format("YYYY-MM-DD"),
        Master: element.nomMaster,
        Etudiant: element.prenom + " " + element.nom,
        Etab: element.code_etablissement,
        Etat: element.edmlibelle,
        Score: this.calculerScore(element),
      });
    });
    console.log(LstStudents);
    this.ADM.ExporterPDF(LstStudents);
  }
  scoreSort(arr: any) {
    var i, j;
    for (i = 0; i < arr.length - 1; i++) {
      for (j = 0; j < arr.length - i - 1; j++) {
        if (this.calculerScore(arr[j]) < this.calculerScore(arr[j + 1])) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  inverse = false;
  scoreSortClick(arr: any) {
    var i, j;
    for (i = 0; i < arr.length - 1; i++) {
      for (j = 0; j < arr.length - i - 1; j++) {
        if (!this.inverse) {
          if (this.calculerScore(arr[j]) < this.calculerScore(arr[j + 1])) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        } else {
          if (this.calculerScore(arr[j]) > this.calculerScore(arr[j + 1])) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
    }
    return arr;
  }
  async filtrageGlobale() {
    let tab = JSON.parse(JSON.stringify(this.Mastersapps));

    await this.refreshlist();
    setTimeout(() => {
      if (this.filtre.etablissement != "aucune") {
        tab = tab.filter((el) => {
          return el.code_etablissement === this.filtre.etablissement;
        });
      }
      if (this.filtre.diplomes != "aucune") {
        tab = tab.filter((el) => {
          return el.diplome === this.filtre.diplomes;
        });
      }
      if (this.filtre.domaines != "aucune") {
        tab = tab.filter((el) => {
          return el.domaine === this.filtre.domaines;
        });
      }
      if (this.filtre.specialite != "aucune") {
        tab = tab.filter((el) => {
          return el.specialite === this.filtre.specialite;
        });
      }

      console.log(tab);
      this.Mastersapps = tab;
    }, 400);
  }
  open3(content) {
    this.modal.open(content, { ariaLabelledBy: "Niveau" }).result.then(
      (result) => {},
      (reason) => {}
    );
  }
  reset() {
    this.filtre = {
      candidature: "tout",
      etablissement: "aucune",
      diplomes: "aucune",
      domaines: "aucune",
      specialite: "aucune",
      score: { val: null, comparison: "" },
      status: [],
    };
  }
  importNotesList(files: FileList) {
    let file: File = files.item(0);
    console.log(file.name);
    console.log(file.size);
    console.log(file.type);
    let reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      let csv: string = reader.result as string;
      console.log(csv);
      let data = csvToArray(csv);
      data = data.filter((el) => {
        return el.NOM != undefined;
      });
      console.log(data);
      this.listeImporte = data;
      this.setConfirmedStudents();
    };
  }
  setConfirmedStudents() {
    console.log("student", this.Mastersapps);
    console.log("note", this.listeImporte);
    for (const students of this.Mastersapps) {
      for (const Notes of this.listeImporte) {
        if (Notes.CIN == students.cin) {
          console.log("here");
          let param = {
            id_etat_demande_master: "5",
            id_demande: students.id_demande,
          };
          let param2 = {
            note_entretien: Notes.Note,
            id_demande: students.id_demande,
          };
          let sub2 = this.MS.updateNotesDemandeMaster(param2).subscribe(() => {
            sub2.unsubscribe();
          });
          let sub = this.MS.SetEtatDemandesMaster(param).subscribe(() => {
            sub.unsubscribe();
          });
        }
      }
    }
  }
}

function csvToArray(str, delimiter = ";") {
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });

  // return the array
  return arr;
}
