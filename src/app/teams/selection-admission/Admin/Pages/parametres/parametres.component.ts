import  swal  from 'sweetalert';
import { Component, OnInit, ElementRef } from "@angular/core";

import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { ParametresService } from "../../services/parametres.service";

@Component({
  selector: "app-parametres",
  templateUrl: "./parametres.component.html",
  styleUrls: ["./parametres.component.scss"],
})
export class ParametresComponent implements OnInit {
  pagedomaine = 1;
  pniveau;
  pspec;
  lstdomains = [];
  lstSpecialite = [];
  lstniveau = [];
  subDomaine: Subscription;
  subSpecialite: Subscription;
  subNiveau: Subscription;
  Score={
    Malus:{RED0:null,RED1:null,RED2:null,RED3:null,RED4:null},
    BnS:null,
    BnM:{Pass:null,AssB:null,Bien:null,TBien:null},
    BC:null,
    CdM:null
    }
  constructor(private PS: ParametresService, public modal: NgbModal) {}
  D = { libelle: null };
  S = { libelle: "", id_domaine: null };
  N = { libelle: "" };
  ngOnInit() {
    if(localStorage.getItem('FormuleScore')!=null){
      this.Score=JSON.parse(localStorage.getItem('FormuleScore'));
    }
    this.subDomaine = this.PS.getDomains().subscribe((val) => {
      console.log("domain", val);

      this.lstdomains = val.results;
    });
    this.subSpecialite = this.PS.getSpecialites().subscribe((val) => {
      this.lstSpecialite = val.results;
      console.log("Spec", val);
    });
    this.subNiveau = this.PS.getNiveaux().subscribe((val) => {
      this.lstniveau = val.results;
      console.log("Niv", val);
    });
  }
  enregistrerScore(){
    localStorage.setItem('FormuleScore',JSON.stringify(this.Score));
    console.log(this.Score);
    swal("Formule Score", "Score était ajouté avec succée", "success");
  }
  SupprimerDomaine(Domaine) {
    var id = Domaine.id_domaine;
    swal({
      title: "Domaine",
      text: "Voulez vous Vraiment Supprimer  ce Domaine  ?",
      icon: "warning",
      buttons: ["Non", "Oui"],
      dangerMode: false,
    }).then((willDelete) => {
      if (willDelete) {
        this.PS.deleteDomaine(id).subscribe();
        swal("Domaine", "Domaine Supprimé avec succée", "success");
        setTimeout(() => {
          this. refresh();
        }, 500);
      }
    });
  }
  SupprimerSpecialite(Spec) {
    var id = Spec.id_specialite;
    swal({
      title: "Spécialité",
      text: "Voulez vous Vraiment Supprimer  cette Spécialité  ?",
      icon: "warning",
      buttons: ["Non", "Oui"],
      dangerMode: false,
    }).then((willDelete) => {
      if (willDelete) {
        this.PS.deleteSpecialite(id).subscribe();
        swal("Spécialité", "Spécialité Supprimé avec succée", "success");
        setTimeout(() => {
          this. refresh();
        }, 500);
      }
    });
  }
  SupprimerNiveau(Niv) {
    var id = Niv.id_niveau;
    swal({
      title: "Niveau",
      text: "Voulez vous Vraiment Supprimer  ce Niveau  ?",
      icon: "warning",
      buttons: ["Non", "Oui"],
      dangerMode: false,
    }).then((willDelete) => {
      if (willDelete) {
        this.PS.deleteNiveau(id).subscribe();
        swal("Niveau", "Niveau Supprimé avec succée", "success");
        setTimeout(() => {
          this. refresh();
        }, 500);
      }
    });
  }
  refresh() {
    this.lstdomains = [];
    this.lstSpecialite = [];
    this.lstniveau = [];
    setTimeout(() => {
      this.subDomaine.unsubscribe();
      this.subDomaine = this.PS.getDomains().subscribe((val) => {
        {
          this.lstdomains = val.results;
        }
      });
      this.subSpecialite.unsubscribe();
      this.subSpecialite = this.PS.getSpecialites().subscribe((val) => {
        {
          this.lstSpecialite = val.results;
        }
        console.log(this.lstSpecialite);
      });
      this.subNiveau.unsubscribe();
      this.subNiveau = this.PS.getNiveaux().subscribe((val) => {
        {
          this.lstniveau = val.results;
        }
      });
    }, 500);
  }
  ajouterDomaine() {
    this.PS.ajouterDomaine(this.D);
    this.D.libelle = "";
    this.refresh();
  }
  ajouterNiveau() {
    this.PS.ajouterNiveau(this.N);
    this.N.libelle = "";
    this.refresh();
  }
  public navigateToSection(section: string) {
    window.location.hash = "";
    window.location.hash = section;
  }
  tabDomaine=true;
  tabNiveau=false;
  tabSpecialite=false;
  tabScore=false;
  change(type) {
    if(type=='domaine'){
      this.tabDomaine=true;
      this.tabNiveau=false;
      this.tabSpecialite=false;
      this.tabScore=false;
    }else if(type=='niveau'){
      this.tabDomaine=false;
      this.tabNiveau=true;
      this.tabSpecialite=false;
      this.tabScore=false;
    }
    else if(type=='specialite'){
      this.tabDomaine=false;
      this.tabNiveau=false;
      this.tabSpecialite=true;
      this.tabScore=false;
    }
    else if(type=='Score'){
      this.tabDomaine=false;
      this.tabNiveau=false;
      this.tabSpecialite=false;
      this.tabScore=true;
    }
  }
  ajouterSpecialite() {
    this.PS.ajouterSpecialite(this.S);
    this.S.id_domaine = 1;
    this.S.libelle = "";
    this.refresh();
  }
  openModalDomaine(content) {
    this.D.libelle='';
    this.modal
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {},
        (reason) => {}
      );
  }
  openModalModifNiveau(content,item) {
    this.N=item;
    this.modal.open(content, { ariaLabelledBy: "Specialité" }).result.then(
      (result) => {},
      (reason) => {}
    );
  }
  OpenModalModifierSpec(item,modifSpec){
    console.log(item);
    this.S=item;
    this.S.id_domaine=item.id_domaine;
    this.S.libelle=item.libelles;
    this.modal.open(modifSpec, { ariaLabelledBy: "Specialité" }).result.then(
      (result) => {},
      (reason) => {}
    );
  }
  OpenModalModifierDom(item,modifDom){
    console.log(item);
    this.D=item;
    this.modal.open(modifDom, { ariaLabelledBy: "Specialité" }).result.then(
      (result) => {},
      (reason) => {}
    );
  }
  EnregistrerDom(){
    this.PS.modifierDomaine(this.D).subscribe();
    swal("Specialité", "Specialité Modifié avec succée", "success");
    this.refresh();
    

  }
  EnregistrerSpec(){
    this.PS.modifierSpecialite(this.S).subscribe();
    swal("Specialité", "Specialité Modifié avec succée", "success");
    this.refresh();
    

  }
  EnregistrerNiveau(){
    this.PS.modifierNiveau(this.N).subscribe();
    swal("Niveau", "Niveau Modifié avec succée", "success");
    this.refresh();
    

  }
  openModalSpecialite(content) {
    this.S.id_domaine=1;
    this.S.libelle='';
    this.modal.open(content, { ariaLabelledBy: "Specialité" }).result.then(
      (result) => {},
      (reason) => {}
    );
  }
  openModalNiveau(content) {
    this.N.libelle='';
    this.modal.open(content, { ariaLabelledBy: "Niveau" }).result.then(
      (result) => {},
      (reason) => {}
    );
  }
  
}
