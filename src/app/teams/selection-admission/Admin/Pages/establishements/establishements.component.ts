import { VilleService } from './../../../User/Services/ville.service';
import swal from "sweetalert";

import * as ville from "../../../../../../assets/ville.json";

import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Establishment } from "../../Models/etablissement";
import { UserService } from "../../../User/Services/user.service"
import { EtablissementService } from "../../services/etablissement.service";
import { GouvernoratService } from "../../../User/Services/gouvernorat.service";

@Component({
  selector: "app-establishements",
  templateUrl: "./establishements.component.html",
  styleUrls: ["./establishements.component.scss"],
})
export class EstablishementsComponent implements OnInit {
  tabestablishement = false;
  formestablishment = true;
  lstville = [];
  lstgov=[];
  p;
  Application={fichier:null};
  sub: Subscription;
  E: Establishment = {
    libelle: "",
    rue: "",
    ville: 1,
    gouvernorat_adresse: 1,
    code_postale: "",
    logo:'',
    site_web:'',
    code_etablissement:''
    
  };
  constructor(private US: UserService, 
    private ES: EtablissementService,
    private GS:GouvernoratService,
    private VS:VilleService
    ) {}
  lstestablishment: Establishment[] = [];
  user:any;
  ngOnInit() {
    this.VS.getVille().subscribe(val=>{
      console.log(val);
      this.lstville=val.results
    })
    this.GS.getGouvernorats().subscribe(val=>{
      console.log(val);
      this.lstgov=val.results;
    })
        this.US.getUser(
      Number(localStorage.getItem("id")),
      localStorage.getItem("token")
    ).subscribe((val) => {
      console.log(val);
      
      this.user = val.rows[0];
    });

    this.sub = this.ES.getetablissements().subscribe((val) => {
      console.log(val);
      var lst = [];

      for (let i = 0; i < val.results.length; i++) {
        lst.push(val.results[i]);
      }
      this.lstestablishment = lst;
    });
  }
  modif = false;
  ModifierEtab(Etab) {
    this.tabestablishement = true;
    this.formestablishment = false;
    this.E = Etab;
    this.modif = true;
  }
  refreshEtablissements() {
    this.lstestablishment = new Array();
    this.sub.unsubscribe();
    setTimeout(() => {
      this.sub = this.ES.getetablissements().subscribe((val) => {
        for (let i = 0; i < val.results.length; i++) {
          this.lstestablishment.push(val.results[i]);
        }
        console.log(this.lstestablishment);
      });
    }, 500);
  }
  EnregistereEstablishement() {

    {
      this.tabestablishement = false;
      this.formestablishment = true;
      this.modif = false;
      var form=new FormData();
      form.append('logo', this.Application.fichier);  
      form.append('libelle', this.E.libelle);
      form.append('code_postale',this.E.code_postale);
      form.append('rue', this.E.rue);
      form.append('ville', String(this.E.ville));
      form.append('gouvernorat_adresse', String(this.E.gouvernorat_adresse));
      form.append('code_etablissement', this.E.code_etablissement);
      form.append('site_web', this.E.site_web);
      form.append('id_etablissement',String(this.E.id_etablissement))
      this.ES.modifieretablissement(form).subscribe(val=>{
        this.refreshEtablissements();
      });
      swal("Etablissement", "changements enregistré avec succée", "success");

    }
  }
  AjouterEstablishement() {
    {
      swal("Etablissement", "Etablissement Ajouté avec succée", "success");
      this.tabestablishement = false;
      this.formestablishment = true;
      var form=new FormData();
      form.append('logo', this.Application.fichier);  
      form.append('libelle', this.E.libelle);
      form.append('code_postale',this.E.code_postale);
      form.append('rue', this.E.rue);
      form.append('ville', String(this.E.ville));
      form.append('gouvernorat_adresse', String(this.E.gouvernorat_adresse));
      form.append('code_etablissement', this.E.code_etablissement);
      form.append('site_web', this.E.site_web);
      console.log(this.E)
      this.ES.ajouteretablissement(form).subscribe(
       val=>{ this.refreshEtablissements();}
      );
      this.E = {
        libelle: "",
        rue: "",
        ville: 1,
        gouvernorat_adresse: 1,
        code_postale: "",
        logo:'',//
        site_web:'',//done
        code_etablissement:''//done
      };
    }
  }
  async imageselect() {

    this.Application.fichier
    //@ts-ignore
    const file = document.getElementById('img').files;
    this.Application.fichier = file[0];
  }
  SupprimerMaster(Etablissement) {
    var id = Etablissement.id_etablissement;
    swal({
      title: "Etablissement",
      text: "Voulez vous Vraiment Supprimer  cette Etablissement  ?",
      icon: "warning",
      buttons: ["Non", "Oui"],
      dangerMode: false,
    }).then((willDelete) => {
      if (willDelete) {
        this.ES.deletetablissementby(id).subscribe();
        swal("Etablissement", "Etablissement Supprimé avec succée", "success");
        setTimeout(() => {
          this.refreshEtablissements();
        }, 500);
      }
    });
  }
}
