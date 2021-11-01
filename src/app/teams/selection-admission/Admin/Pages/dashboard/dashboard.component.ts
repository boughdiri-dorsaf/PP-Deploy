import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from './../../../User/Models/user';
import { AdminMasterServiceService } from './../../../adminMaster/Services/admin-master-service.service';
import swal from "sweetalert";

import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import moment from "moment";
import { UserService } from "../../../User/Services/user.service";
import { EtablissementService } from "../../services/etablissement.service.js";
import { DepartementService } from "../../services/departement.service.js";
import { MasterService } from "../../services/master.service.js";
import { Departement } from "../../Models/departement.js";
import { Establishment } from "../../Models/etablissement.js";
import { Master } from "../../Models/master.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: [
    "./dashboard.component.scss",
    "../../../../../../assets/icon/svg-animated/svg-weather.css",
  ],
})
export class DashboardAdminComponent implements OnInit {
  lstmasters = [];
  page: any;
  AdminMaster:User={
    email:'',
    nom:'',
    prenom:'',
    password:'',

    num_passport:'',
    age:0,
    cin:Number(10000000),
    sexe:'',
    date_naissance:'1998-03-03',
    ville:'',
    gouvern_naissance:'',
    id_situation_professionnel:1,
    gouvernorat_adresse:'',
    pays:'',
    rue:'',
    code_postale:'',
    id_role:10};
  constructor(
    private modal:NgbModal,
    private US: UserService,
    private ES: EtablissementService,
    private DS: DepartementService,
    private MS: MasterService,
    private ADM:AdminMasterServiceService
  ) {}
  tabmasters = false;
  formmasters = true;
  lstdepartement: Departement[] = [];
  sub: Subscription;admin;
  lstetablissement: Establishment[] = [];
  M: Master = {
    nom: null,
    id_departement: null,
    seuil_admis_attente: null,
    seuil_admission: null,
    id_etablissement: null,
    date_fin_master: null,
  };
  sub4admin:Subscription;
  lstAdminMaster:any[]=[]
  ngOnInit() {
    this.sub4admin=this.ADM.getAdmins().subscribe(AdminsMaster=>{
      
     this.lstAdminMaster= AdminsMaster.results;
    console.log(this.lstAdminMaster);
    })
    this.ES.getetablissements().subscribe((val) => {
      for (let i = 0; i < val.results.length; i++) {
        this.lstetablissement.push(val.results[i]);
      }
      console.log(val)
    });
    this.DS.getDepartements().subscribe((val) => {
      for (let i = 0; i < val.results.length; i++) {
        this.lstdepartement.push(val.results[i]);
      }
    });
    this.sub = this.MS.getmasters().subscribe((val) => {
      console.log(val);
      for (let i = 0; i < val.results.length; i++) {
        this.lstmasters.push(val.results[i]);
      }
      console.log(this.lstmasters);
      for (let index = 0; index < this.lstmasters.length; index++) {
        this.MS.getNBapplicants(this.lstmasters[index].id_master).subscribe(val=>{
          //@ts-ignore
          this.lstmasters[index].nbapp=val.results[0]['COUNT(*)'];
        
        });
        
      }
      if(this.lstmasters.length!=0){
        this.selectedAdminEtablissement=this.lstmasters[0].id_etablissement;
        this.filtertable(this.lstmasters[0].id_etablissement);
      }
    });
    this.US.getUser(
      Number(localStorage.getItem("id")),
      localStorage.getItem("token")
    ).subscribe((val) => {
      //@ts-ignore
      this.admin = val.rows[0];
    });
  }
emptymaster(){
  this.M = {
    nom: "",
    id_departement: null,
    seuil_admis_attente: 0,
    seuil_admission: 0,
    id_etablissement: null,
    date_fin_master: "",
  };
}
  refreshmasters() {
    this.lstmasters = new Array();
    this.sub.unsubscribe();
    this.sub = this.MS.getmasters().subscribe((val) => {
      for (let i = 0; i < val.results.length; i++) {
        this.lstmasters.push(val.results[i]);
      }
      
      for (let index = 0; index < this.lstmasters.length; index++) {
        this.MS.getNBapplicants(this.lstmasters[index].id_master).subscribe(val=>{
          //@ts-ignore
          this.lstmasters[index].nbapp=val.results[0]['COUNT(*)'];
        
        });
        
      }
    });
  }
  submitted = false;
  Addmaster() {
    this.submitted = true;

    {
      swal("Master", "Master Ajouté avec succée", "success");
      this.tabmasters = false;
      this.formmasters = true;
      console.log(this.M);
      this.MS.ajoutermaster(this.M).subscribe((val) => {
        console.log(val);
        this.M = {
          nom: "",
          id_departement: null,
          seuil_admis_attente: 0,
          seuil_admission: 0,
          id_etablissement: null,
          date_fin_master: "",
        };
        this.refreshmasters();
      });
    }
  }
  modif = false;
  ModifierMaster(Master) {
    console.log();
    Master.date_fin_master = moment(Master.date_fin_master).format(
      "YYYY-MM-DD"
    );
    new Date(Master);
    this.M = Master;
    this.tabmasters = true;
    this.formmasters = false;
    this.modif = true;
  }
  EnregistrerMaster() {
    {
      this.tabmasters = false;
      this.formmasters = true;
      this.modif = false;
      this.MS.updatemaster(this.M).subscribe();
      swal("Master", "changements enregistré avec succée", "success");
      this.M = {
        nom: "",
        id_departement: null,
        seuil_admis_attente: 0,
        seuil_admission: 0,
        id_etablissement: null,
        date_fin_master: "",
      };
    }
    this.refreshmasters()
  }
  searchText=''
  SupprimerMaster(Master) {
    var id = Master.id_master;
    swal({
      title: "Master",
      text: "Voulez vous Vraiment Supprimer  ce Master  ?",
      icon: "warning",
      buttons: ["Non", "Oui"],
      dangerMode: false,
    }).then((willDelete) => {
      if (willDelete) {
        this.MS.deletemaster(id).subscribe();
        swal("Master", "Master Supprimé avec succée", "success");
        setTimeout(() => {
          this.refreshmasters();
        }, 500);
      }
    });
  }
  SelectedMaster:Master=null;
  open(content,item) {
    this.SelectedMaster=item;
    console.log(item)
    this.modal.open(content, {ariaLabelledBy: 'Application'}).result.then((result) => {
    }, (reason) => {     
    });
  }
  AssignerAdminMaster(){
  //  this.modal.dismissAll();
  this.ADM.checkemailexist(this.AdminMaster.email).subscribe(val=>{
    console.log(val);
    if(val.results.length==0){
      this.ADM.EnvoyerRequeteAdmin(this.AdminMaster).subscribe(val=>{
        
         console.log(val);
         this.SelectedMaster.id_admin_master=val.results.insertId;
         
        this.ADM.UpdateAdminMaster( this.SelectedMaster).subscribe(val=>{
          this.modal.dismissAll(val=>{
           
          })
          swal('Email',"Un mail contenant l'identifiant et le mot de passe du nouveau admin est envoyé avec succées",'success');
          this.refreshmasters();
         
        });
       })
    }
    else
    {
      this.modal.dismissAll(val=>{
           
      })
      swal('Email','Cette adresse mail est déja utilisée','error');
    }
  })
  
  }
  selectedAdminMaster=null;
  ModifierAdminMaster(){
    //  this.modal.dismissAll();
           this.SelectedMaster.id_admin_master=this.selectedAdminMaster;
           
          this.ADM.UpdateAdminMaster( this.SelectedMaster).subscribe(val=>{
            this.modal.dismissAll(val=>{
             
            })
            swal('Admin master',"L'admin du master a été modifié avec succées",'success');
            this.refreshmasters();
            this.sub4admin.unsubscribe();
          
          });
          this.sub4admin=this.ADM.getAdmins().subscribe(AdminsMaster=>{
            this.lstAdminMaster= AdminsMaster.results;
            console.log(this.lstAdminMaster)
           })
    }
    selectedAdminEtablissement=null
  filtertable(idetab){
    this.lstmasters=[];
    this.sub.unsubscribe();
    this.sub = this.MS.getmasters().subscribe((val) => {
      console.log(val);
      for (let i = 0; i < val.results.length; i++) {
      
        if(val.results[i].id_etablissement==idetab)
        {this.lstmasters.push(val.results[i]);}
       else if(idetab==-1){
        this.lstmasters.push(val.results[i]);
       }
      
      }
      console.log(this.lstmasters);
      
    });
  }
}
