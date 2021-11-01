import { AdminMasterServiceService } from './../../../adminMaster/Services/admin-master-service.service';
import moment  from 'moment';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import swal  from 'sweetalert';

import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';
import { EtudiantService } from '../../services/etudiant.service';
import { UserService } from '../../Services/user.service';
import { MasterService } from '../../../Admin/services/master.service';
import { EtablissementService } from '../../../Admin/services/etablissement.service';
import { User } from '../../Models/user';
import { CursusService } from '../../services/cursus.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  constructor(private ADM:AdminMasterServiceService,private CS:CursusService,private modal:NgbModal,private Etudiant:EtudiantService,private US:UserService,private MS:MasterService,private ES:EtablissementService,private route:Router) { }
lstmasters=[];

lstetablissement=[];
lstAppli:any=[];title='Inscription & Admission'
page = 1;
user:User={email:'',nom:'',prenom:'',password:'',num_passport:'',age:0,cin:null,
sexe:'',date_naissance:'',ville:'',gouvern_naissance:'',id_situation_professionnel:1,gouvernorat_adresse:'',pays:'',rue:'',code_postale:'',id_role:0};
email='';

pageSize =10;
listeAdmins=[];
p1;p
optionrech='Mes Applications'
sub:Subscription
sub1:Subscription
sub2:Subscription
sub3:Subscription
sub4admin:Subscription
selectedmaster=''
Application={
  date_inscrit:null,
  id_etat_demande_master:3,
  id_master:0,
  id_etudiant:0,
  fichier:null}
  ngOnInit() {
 
  this.sub=  this.MS.GetDemandesMaster().subscribe(Applications=>{
  
  this.sub2=  this.MS.getmasters().subscribe(val=>{
  this.sub3=    this.ES.getetablissements().subscribe(etablissemt=>{
    this.sub1=  this.Etudiant.getetudiant(Number(localStorage.getItem('id'))).subscribe(
     
    error => {console.log(error);
     this.email=  error.results[0].email;
     console.log(this.email)
      this.filtermasters('Mes Applications')},
    data => {
      console.log(data) 
      console.log() 
      if(data.statusText=='Not Found'){
        console.log('here')
        var body={id_user:Number(localStorage.getItem('id'))}
        this.Etudiant.AddEtudiant(body).subscribe(
          err=>{console.log(err)},
          data=>{console.log(data)}
          );
        setTimeout(() => {
          this.filtermasters('Mes Applications')
        }, 800);
        return
      }
      console.log(Applications);
      
      this.lstAppli=Applications.results
      
      
      this.lstetablissement=etablissemt.results;
      
      console.log(val)
   
      console.log(data.error.message)
      if(data.error.message!="choix n'existe pas"){
        
        this.Application.id_etudiant=data.results[0].id_etudiant;
         
        for (let i = 0; i < val.results.length; i++) {
          
          this.lstmasters.push({nom:val.results[i].mastername,
           
           date_fin:val.results[i].date_fin_master,
            
           etablissement:this.getetablissemt(val.results[i].id_etablissement),
            
           Seuil_Admission:val.results[i].seuil_admission,
            
           id:val.results[i].id_master,
            
           idEtudiant:data.results[0].id_etudiant,
           
         etat:this.exist(data.results[0].id_etudiant,val.results[i].id_master)
       })
        }
      }else{
        
        for (let i = 0; i < val.results.length; i++) {
          
          this.lstmasters.push({nom:val.results[i].mastername,
           
           date_fin:val.results[i].date_fin_master,
            
           etablissement:this.getetablissemt(val.results[i].id_etablissement),
            
           Seuil_Admission:val.results[i].seuil_admission,
            
           id:val.results[i].id_master,
            
           idEtudiant:null,
           
         etat:'Pas D application'
       })
        }
      }
   
      this.filtermasters('Mes Applications')
    });
  });
});

});
    this.US.getUser(Number(localStorage.getItem('id')),localStorage.getItem('token')).subscribe(val=>{
     
      
     // this.user=val.data[0];
    });
    
  }
  filtermasters(option){
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    this.lstAppli=new Array();
    this.lstetablissement=new Array();
    this.lstmasters=new Array();
    if(option=='Liste Totale'){
      this.sub=  this.MS.GetDemandesMaster().subscribe(Applications=>{
        this.sub1=  this.Etudiant.getetudiant(Number(localStorage.getItem('id'))).subscribe(Etud=>{
        this.sub2=  this.MS.getmasters().subscribe(val=>{
        this.sub3=    this.ES.getetablissements().subscribe(etablissemt=>{
                
        this.lstAppli=Applications.results
        
        
        this.lstetablissement=etablissemt.results;
        //@ts-ignore
        this.Application.id_etudiant=Etud.results[0].id_etudiant;
        console.log(val)
      
       for (let i = 0; i < val.results.length; i++) {
         
         this.lstmasters.push({nom:val.results[i].mastername,
          
          date_fin:val.results[i].date_fin_master,
           
          etablissement:this.getetablissemt(val.results[i].id_etablissement),
           
          Seuil_Admission:val.results[i].seuil_admission,
           
          id:val.results[i].id_master,
           //@ts-ignore
          idEtudiant:Etud.results[0].id_etudiant,
          //@ts-ignore
        etat:this.exist(Etud.results[0].id_etudiant,val.results[i].id_master)})
             }
          });
        });
      });
      
      });
    }
    else if(option=='Mes Applications'){
      console.log('here')
      this.sub=  this.MS.GetDemandesMaster().subscribe(Applications=>{
        this.sub1=  this.Etudiant.getetudiant(Number(localStorage.getItem('id'))).subscribe(Etud=>{
        this.sub2=  this.MS.getmasters().subscribe(val=>{
        this.sub3=    this.ES.getetablissements().subscribe(etablissemt=>{
                    
        this.lstAppli=Applications.results
        
        
        this.lstetablissement=etablissemt.results;
        //@ts-ignore
        this.Application.id_etudiant=Etud.results[0].id_etudiant;
        console.log(val)
      
       for (let i = 0; i < val.results.length; i++) {
         
         this.lstmasters.push({nom:val.results[i].mastername,
          
          date_fin:val.results[i].date_fin_master,
           
          etablissement:this.getetablissemt(val.results[i].id_etablissement),
           
          Seuil_Admission:val.results[i].seuil_admission,
           
          id:val.results[i].id_master,
           //@ts-ignore
          idEtudiant:Etud.results[0].id_etudiant,
          //@ts-ignore
        etat:this.exist(Etud.results[0].id_etudiant,val.results[i].id_master)})
              var tab=[];
              for (let i = 0; i < this.lstmasters.length; i++) {
               if(this.lstmasters[i].etat!="Pas D application"){
                  tab.push(this.lstmasters[i]);
               }
                
              }
              this.lstmasters=tab;
             }
          });
        });
      });
      
      });

    }
    else if(option=='Liste des Masters'){
      this.sub=  this.MS.GetDemandesMaster().subscribe(Applications=>{
        this.sub1=  this.Etudiant.getetudiant(Number(localStorage.getItem('id'))).subscribe(Etud=>{
        this.sub2=  this.MS.getmasters().subscribe(val=>{
        this.sub3=    this.ES.getetablissements().subscribe(etablissemt=>{
                 
        this.lstAppli=Applications.results
        
        
        this.lstetablissement=etablissemt.results;
        //@ts-ignore
        this.Application.id_etudiant=Etud.results[0].id_etudiant;
        console.log(val)
      
       for (let i = 0; i < val.results.length; i++) {
         
         this.lstmasters.push({nom:val.results[i].mastername,
          
          date_fin:val.results[i].date_fin_master,
           
          etablissement:this.getetablissemt(val.results[i].id_etablissement),
           
          Seuil_Admission:val.results[i].seuil_admission,
           
          id:val.results[i].id_master,
           //@ts-ignore
          idEtudiant:Etud.results[0].id_etudiant,
          //@ts-ignore
        etat:this.exist(Etud.results[0].id_etudiant,val.results[i].id_master)})
              var tab=[];
              for (let i = 0; i < this.lstmasters.length; i++) {
               if(this.lstmasters[i].etat=="Pas D application"){
                  tab.push(this.lstmasters[i]);
               }
              }
              this.lstmasters=tab;
             }
          });
        });
      });
      
      }); 

    }

  }
  exist(idetudiant,idmaster){
 var msg="Pas D application"
   for (let i = 0; i < this.lstAppli.length; i++) {
     if(this.lstAppli[i].id_etudiant==idetudiant&&this.lstAppli[i].id_master==idmaster){
         msg=this.lstAppli[i].edmlibelle;
     }
     
   }
   return msg;
  }
  idmaster
  conditions=false;
appliquer(){
this.Application.id_master=this.idmaster;
this.Application.date_inscrit=new Date();
var year=this.Application.date_inscrit.getFullYear();
if(Number(this.Application.date_inscrit.getMonth())+1<10)
{
  var month="0"+(Number(this.Application.date_inscrit.getMonth())+1);
}
else{
 var month=(Number(this.Application.date_inscrit.getMonth())+1)+""
}

if(Number(this.Application.date_inscrit.getDate())<10)
{
  var day="0"+(Number(this.Application.date_inscrit.getDate()));
}
else{
 var day=(Number(this.Application.date_inscrit.getDate()))+""
}

this.Application.date_inscrit=year+"-"+month+"-"+day;


    var form=new FormData();
    form.append('fichier', this.Application.fichier);  
    form.append('id_master', String(this.Application.id_master));
    form.append('id_etudiant', String(this.Application.id_etudiant));
    form.append('id_etat_demande_master', String(this.Application.id_etat_demande_master));
    form.append('date_inscrit', String(this.Application.date_inscrit));
    form.append('email', this.email);
    form.append('nomMaster', this.selectedmaster);
    
    this.MS.AppliquerMaster(form);
   setTimeout(() => {
    this.filtermasters('Liste Totale');
   }, 800);
this.conditions=false;
}
pic
async imageselect() {

  this.Application.fichier
  //@ts-ignore
  const file = document.getElementById('img').files;
  console.log(file[0]);
  this.Application.fichier = file[0];
}
  getetablissemt(id){
    var etablissement='';
  for (let i = 0; i < this.lstetablissement.length; i++) {
    if(id==this.lstetablissement[i].id_etablissement){
      return etablissement=this.lstetablissement[i].libelle
    }
    
  }
  }
  isexpired(date){
 var d1=   moment(date);
 var d2=   moment();
 console.log()
 if(d1.diff(d2,'days')<0){
   return true;
 }
 else
 {return false}

  }
  open(content,item) {
    this.idmaster=item.id;
    console.log(item);
    this.selectedmaster=item.nom
this.CS.getCursus(Number(localStorage.getItem('id'))).subscribe(
  data=>{
    console.log()
    if(data.results.length<3){
      swal('Cursus','Vous devez completer votre cursus, Vous serez automatiquement redirigé  vers la page correspondante','info').then(()=>{
        this.route.navigate(['dashboard/Cursus'])
      })
      return;
    }
    this.modal.open(content, {ariaLabelledBy: 'Application'}).result.then((result) => {
    
    }, (reason) => {
     
    });
  },
  error=>{
    if(error.statusText=="Not Found"){
      swal('Cursus','Vous devez remplir votre cursus, Vous serez automatiquement redirigé  vers la page correspondante','error').then(()=>{
        this.route.navigate(['dashboard/Cursus'])
      })
    }
    console.log(error)
  }
 
)
    
  }
}


