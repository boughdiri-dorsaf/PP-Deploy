import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Component, OnInit } from '@angular/core';

import * as data from '../../../../../../assets/ville.json';
import { ParametresService } from '../../services/parametres.service';
import { UserService } from '../../../User/Services/user.service';
@Component({
  selector: 'app-admin-master',
  templateUrl: './admin-master.component.html',
  styleUrls: ['./admin-master.component.scss']
})
export class AdminMasterComponent implements OnInit {
  tableresponsable=false;
  ajoutresponsable=true;
  p;
  classe={libelle:'',
    id_responsable_group:0,
    nb_etudiant:0}
    pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'
    patternEmail="^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$"
  //@ts-ignore
  U:User={nom:'',prenom:'',rue:'',gouvernorat_adresse:'',ville:''
  ,password:'',pays:'',id_role:4,age:0,code_postale:"",sexe:'',num_passport:'',cin:'',email:'',date_naissance:''};
  Qualite='';  
  constructor(private US:UserService,private PS:ParametresService,public modal: NgbModal) { }
  lstville=[];
  lstres=[];
    ngOnInit() {
      this.US.GetResponable().subscribe(val=>{
          //@ts-ignore
          this.lstres=val.results
      })
    
      //@ts-ignore
    this.lstville=data.default;
    }
    ajouterClasse(){
      this.PS.ajouterClasse(this.classe);
    }
    ajouterresponsable(){
      this.US.AjouterResponable(this.U,this.Qualite)
   this.tableresponsable=false;
  this.ajoutresponsable=true;
  
  this.U={nom:'',prenom:'',rue:'',gouvernorat_adresse:'',ville:''
  ,password:'',pays:'',id_role:4,age:0,code_postale:"",sexe:'',num_passport:'',cin:'',email:'',date_naissance:''};
  this.Qualite='';  
  }
  open(content) {
    this.modal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    
    }, (reason) => {
     
    });
  }
}
