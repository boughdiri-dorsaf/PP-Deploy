import { DiplomeService } from './../../Services/diplome.service';
import  moment from 'moment';
import { Etudiant } from './../../Models/etudiant';
import { Bacclaureat } from './../../Models/bacclaureat';

import  swal  from 'sweetalert';
import { CursusService } from './../../services/cursus.service';

import { Component, OnInit } from '@angular/core';
import * as villes from '../../../../../../assets/ville.json'
import { Subscription } from 'rxjs';
import { Cursus } from '../../Models/cursus';
import { ParametresService } from '../../../Admin/services/parametres.service';
import { EtablissementService } from '../../../Admin/services/etablissement.service';
import { DepartementService } from '../../../Admin/services/departement.service';
import { EtudiantService } from '../../services/etudiant.service';
import { CursusGenerale } from '../../Models/cursus-generale';
import { BacclaureatService } from '../../Services/bacclaureat.service';
import { CursusgeneralService } from '../../Services/cursusgeneral.service';


@Component({
  selector: 'app-cursus',
  templateUrl: './cursus.component.html',
  styleUrls: ['./cursus.component.scss']
})
export class CursusComponent implements OnInit {
specialite='1'
Niveau='1';
lstetab=[]
lstdep=[];
exist=false;
lstvilles=[];
lstclasses=[]
E:Etudiant={id_situation_etudiant:'',id_departement:0,id_user:0}
C:Cursus=new Cursus('2017','2022',10,0,'','Principale',2,10,2,1,2,null);

switch=true;
lstdomaine=[]
lstspecialite=[]
lstspecialite2=[];
lstsituations=[];
idetudiant;
lstNiveau=[]//
hasbaccursusG=false;
lstAUfin=[]
lstAUdeb=[  ]
lstcursus:Cursus[]=[]
id;sub:Subscription;
sub2:Subscription
Bacc:Bacclaureat={section:'Informatique',session:'Principale',annee:'2017',mention:"",moyenne:10}
CursusG:CursusGenerale= new CursusGenerale('Licence fondamentale',19,'2010',2,2,0);
noBac=true;
idBac=null;
idCursus=null
noCursusG=true;
lstdiplomes=[];
  constructor(private DipS:DiplomeService,private CGS:CursusgeneralService,private BS:BacclaureatService,private CS:CursusService,private PS:ParametresService,private ES:EtablissementService,private DS:DepartementService,private Etudiant:EtudiantService) { }

  ngOnInit() {
    this.getspecialties(this.CursusG.domaine);
    this.DipS.getDiplomes().subscribe(val=>{
      console.log('diplomes',val)
      this.lstdiplomes=val.results;
    })
     console.log(this.lstAUdeb);

    if(localStorage.getItem('Bacc')!=null){
      this.Bacc=JSON.parse(localStorage.getItem('Bacc'));
    }
    if(localStorage.getItem('CursusG')!=null){
      this.CursusG=JSON.parse(localStorage.getItem('CursusG'));
    }
 this.sub2=   this.CS.getCursus(Number(localStorage.getItem('id'))).subscribe(val=>{
   console.log(val)
      //@ts-ignore
      for (let i = 0; i < val.results.length; i++) {
        //@ts-ignore
       this.lstcursus.push(val.results[i])

      }
      console.log(this.lstcursus);
      if(this.lstcursus.length!=0)
      {
        this.thereiscursus=true;
      }

    })
    this.Etudiant.GetLstSituations().subscribe(val=>{
      console.log("Situations",val)
      //@ts-ignore
      this.lstsituations=val.results;
    })
    this.PS.getDomains().subscribe(val=>{
      console.log("Domaine",val);
      //@ts-ignore
      for (let i = 0; i < val.results.length; i++) {
      //@ts-ignore
       this.lstdomaine.push(val.results[i]);
      }
      });
      this.PS.getSpecialites().subscribe(val=>{
        console.log("Specialite",val);
        //@ts-ignore
      for (let i = 0; i < val.results.length; i++) {
        //@ts-ignore
        this.lstspecialite2.push(val.results[i]);
        }
      });

      this.PS.getNiveaux().subscribe(val=>{
        console.log("Niveau",val);
        //@ts-ignore
     for (let i = 0; i < val.results.length; i++) {
      //@ts-ignore
       this.lstNiveau.push(val.results[i])
      }

     })
    this.id=Number(localStorage.getItem('id'));
    this.E.id_user=this.id
    this.sub=this.Etudiant.getetudiant(Number(localStorage.getItem('id'))).subscribe(
      res=>{

        console.log('here');
        console.log(res);

        //@ts-ignore
        if(res.results.length==0){
        this.exist=true;
        this.hasbaccursusG=true;


        return
        }else{
          console.log('here2');
          console.log(res);
          if(res.results[0].id_bacc!=null)
          {
              this.noBac=false;
              this.idBac=res.results[0].id_bacc
              this.BS.getBacclaureat(this.idBac).subscribe(val=>{
                this.Bacc=val.results[0];
                const dateStart = moment(val.results[0].annee)
                var dateEnd = moment()
                var i =0;
                this.lstAUdeb=[]
                this.lstAUfin=[]
                 while (dateEnd.diff(dateStart, 'years') >= 0) {
                  this.lstAUdeb.push({id:i,nom:dateStart.format('YYYY')})
                  this.lstAUfin.push({id:i,nom:dateStart.format('YYYY')})
                  console.log(dateStart)
                  i++;
                  dateStart.add(1, 'year')
                }
              })
          }
          else{
            this.hasbaccursusG=true;
          }
          if(res.results[0].id_cursusgenerale!=null)
          {
              this.noCursusG=false;
              this.idCursus=res.results[0].id_cursusgenerale
              this.CGS.getcursusG(this.idCursus).subscribe(val=>{
                this.CursusG=val.results[0];
                this.getspecialties(this.CursusG.domaine)
                console.log(val)
              })
          }
          else{
            this.hasbaccursusG=true;
          }
          //@ts-ignore
          this.idetudiant=res.results[0].id_etudiant;
        }
        //@ts-ignore
        this.E={id_departement:res.results[0].id_departement,id_user:res.results[0].id_user,id_situation_etudiant:res.results[0].id_situation_etudiant}
      },
      err=>{
        if(err.ok==false){
          this.exist=true;

            this.hasbaccursusG=true;

        }
        this.ajouteretudiant();
        location.reload()
      console.log(err);
      }
    )
// this.lstcursus=JSON.parse(localStorage.getItem('lstcursus'))
    //@ts-ignore

    this.lstvilles=villes.default;

    this.ES.getetablissements().subscribe(val=>{
      console.log("etab",val);
      //@ts-ignore
      for (let i = 0; i < val.results.length; i++) {
        //@ts-ignore
        this.lstetab.push(val.results[i]);

      }


    })

    this.DS.getDepartements().subscribe(val=>{
      console.log("departement",val);
      //@ts-ignore
      for (let i = 0; i < val.results.length; i++) {
        //@ts-ignore
        this.lstdep.push(val.results[i]);

      }
    })

  }

  refresh2(){
this.sub2.unsubscribe();
this.lstcursus=[];
this.sub2=this.CS.getCursus(Number(localStorage.getItem('id'))).subscribe(val=>{
  //@ts-ignore
  for (let i = 0; i < val.results.length; i++) {
    //@ts-ignore
   this.lstcursus.push(val.results[i])

  }
  if(this.lstcursus.length!=0)
  {
    this.thereiscursus=true;
  }else
  {
    this.thereiscursus=false;
  }

})
  }
  getspecialties(id){
  this.lstspecialite=[]
  this.PS.getSpecialites().subscribe(val=>{
    console.log(val)
    //@ts-ignore
 for (let i = 0; i < val.results.length; i++) {
  //@ts-ignore
   if(val.results[i].id_domaine==id)
  {
     //@ts-ignore
   this.lstspecialite.push(val.results[i])
   }
  }

 })
}
  refresh(){
this.sub.unsubscribe();
this.sub=this.Etudiant.getetudiant(Number(localStorage.getItem('id'))).subscribe(
  res=>{

    //@ts-ignore
    if(res.data[0]==undefined){
    this.exist=true;

      this.hasbaccursusG=true;

    //@ts-ignore

    }

  },
  err=>{

  }
)
  }
  ajouteretudiant(){
    console.log('here',this.E)

    this.Etudiant.AddEtudiant(this.E).subscribe(
      err=>{console.log(err)},
      data=>{console.log(data)}

    );
    localStorage.setItem('Bacc',JSON.stringify(this.Bacc))
    localStorage.setItem('CursusG',JSON.stringify(this.CursusG))
  }
  Enregistrer(){
    if(this.Bacc.moyenne>=10 && this.Bacc.moyenne<=12){
      this.Bacc.mention='Passable';
    }
    else if(this.Bacc.moyenne>12.1 && this.Bacc.moyenne<=14){
      this.Bacc.mention='Assez bien';
    }
    else if(this.Bacc.moyenne>14.1 && this.Bacc.moyenne<=16){
      this.Bacc.mention='Bien';
    }
    else if(this.Bacc.moyenne>16.1 && this.Bacc.moyenne<=18){
      this.Bacc.mention='Trés bien';
    }
    else if(this.Bacc.moyenne>18.1 && this.Bacc.moyenne<=20){
      this.Bacc.mention='Excellent';
    }
    else if( this.Bacc.moyenne<10){
      this.Bacc.mention='Redoublent';
    }
    //@ts-ignore
    this.Bacc.id_user=Number(localStorage.getItem('id'));
     //@ts-ignore
     this.CursusG.id_user=Number(localStorage.getItem('id'));
    if(this.noBac){
      this.noBac=false;
      this.BS.addBacclaureat(this.Bacc);
      location.reload();
    }
    else{
      this.Bacc.id_bacc=this.idBac;
      this.BS.UpdateBacclaureat(this.Bacc)
    }
    if(this.noCursusG){
      this.noCursusG=false;
      this.CGS.addcursusG(this.CursusG);
      location.reload();
    }
    else{
      this.CursusG.id_cursusgenerale=this.idCursus;
      this.CGS.UpdatecursusG(this.CursusG)
    }

    localStorage.setItem('Bacc',JSON.stringify(this.Bacc))
    localStorage.setItem('CursusG',JSON.stringify(this.CursusG))
    swal('Cursus','Votre cursus a été enregistré avec succés','success')
  }
  getetablissement(index){
    for (let i = 0; i < this.lstetab.length; i++) {
      if(this.lstetab[i].id_etablissement==index){
        return this.lstetab[i].code_etablissement
      }

    }
  }
  getdomaine(index){

    for (let i = 0; i < this.lstdomaine.length; i++) {
      if(this.lstdomaine[i].id_domaine==index){
        return this.lstdomaine[i].libelle
      }

    }
  }
  getspecialite(index){
    for (let i = 0; i < this.lstspecialite2.length; i++) {
      if(this.lstspecialite2[i].id_specialite==index){
        return this.lstspecialite2[i].libelles
      }

    }
  }
  getniveau(index){

    for (let i = 0; i < this.lstNiveau.length; i++) {
      if(this.lstNiveau[i].id_niveau==index){
        return this.lstNiveau[i].libelle
      }

    }
  }
  getAUfin(index){
    for (let i = 0; i < this.lstAUdeb.length; i++) {
      if(this.lstAUdeb[i].id==index){
        return this.lstAUdeb[i].nom
      }

    }
  }
  getAUdeb(index){
    for (let i = 0; i < this.lstAUfin.length; i++) {
      if(this.lstAUfin[i].id==index){
        return this.lstAUfin[i].nom
      }

    }
  }
  //switch cursus ajout
  SwitchRepeatedInfo=false;
  ButtonRepeatedInfo=false;
  thereiscursus=false;
  SwitchCursus(){
    this.switch=false;
    if(this.lstcursus.length!=0){
     // this.SwitchRepeatedInfo=true;
      this.C.id_etablissement=this.lstcursus[this.lstcursus.length-1].id_etablissement
      this.C.id_domaine=this.lstcursus[this.lstcursus.length-1].id_domaine
      this.C.au_debut=String(Number(this.lstcursus[this.lstcursus.length-1].au_debut)+1);
      this.C.au_fin=String(Number(this.lstcursus[this.lstcursus.length-1].au_fin)+1);
      this.getspecialties(this.C.id_domaine);
      this.C.id_specialite=this.lstcursus[this.lstcursus.length-1].id_specialite;
      console.log(this.C)
      this.C.moyenne=0;
      this.C.credit=0;

      if(this.lstcursus[this.lstcursus.length-1].id_niveau==this.lstNiveau[this.lstNiveau.length-1].id_niveau)
      {this.C.id_niveau=this.lstcursus[this.lstcursus.length-1].id_niveau;}
        else
      {this.C.id_niveau=this.lstcursus[this.lstcursus.length-1].id_niveau+1;}

    }else{
      this.SwitchRepeatedInfo=false;
    }
  }
  AjouterCursus(){

    this.C.id_etablissement=Number(this.C.id_etablissement)
    this.C.id_domaine=Number(this.C.id_domaine)
    this.C.id_niveau=Number(this.C.id_niveau)
    this.C.id_specialite=Number(this.C.id_specialite)
    this.C.moyenne=Number(this.C.moyenne)
    this.C.id_etudiant=this.idetudiant;
    if(this.C.moyenne>=10 && this.C.moyenne<=12){
      this.C.mention='Passable';
    }
    else if(this.C.moyenne>12.1 && this.C.moyenne<=14){
      this.C.mention='Assez bien';
    }
    else if(this.C.moyenne>14.1 && this.C.moyenne<=16){
      this.C.mention='Bien';
    }
    else if(this.C.moyenne>16.1 && this.C.moyenne<=18){
      this.C.mention='Trés Bien';
    }
    else if(this.C.moyenne>18.1 && this.C.moyenne<=20){
      this.C.mention='Excellent';
    }
    if(this.lstcursus==null){
      this.lstcursus=new  Array();
    }
    this.CS.addCursus(this.C);
    this.lstcursus.push(JSON.parse(JSON.stringify(this.C)));
swal('Cursus','Cursus ajouté avec succés','success')
  localStorage.setItem('lstcursus',JSON.stringify(this.lstcursus));
  this.switch=true;

  }
  supprimercursus(id){
    swal({
      title: "Cursus",
      text: "Voulez vous supprimer cette année universitaire du cursus  ?",
      icon: "warning",

      buttons: ["Non", "Oui"],
      dangerMode: false,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.CS.deleteCursus(id);
        setTimeout(()=>{
          this.refresh2();
        },800);
      }
    });

  }
  modif=false;
  modifierCursus(item){
    this.C=item;
    this.switch=false;
    this.modif=true;
  }
  EnregistrerCursus(){
    var modifC:Cursus={
      id_domaine:this.C.id_domaine,
      id_etablissement:this.C.id_etablissement,
      id_niveau:this.C.id_niveau,
      id_etudiant:this.C.id_etudiant,
      id_specialite:this.C.id_specialite,
      id_cursus:this.C.id_cursus,
      au_debut:this.C.au_debut,
      au_fin:this.C.au_fin,
      moyenne:this.C.moyenne,
      credit:this.C.credit,
      mention:this.C.mention,
      session:this.C.session,
      note_pfe:this.C.note_pfe

    }
    if(this.C.moyenne>=10 && this.C.moyenne<13){
      modifC.mention='Passable';
    }
    else if(this.C.moyenne>=13 && this.C.moyenne<15){
      modifC.mention='Assez bien';
    }
    else if(this.C.moyenne>=15 && this.C.moyenne<16.5){
      modifC.mention='Bien';
    }
    else if(this.C.moyenne>=16.5 && this.C.moyenne<19){
      modifC.mention='Trés bien';
    }
    else if(this.C.moyenne>=19 && this.C.moyenne<20){
      modifC.mention='Excellent';
    }
    this.CS.UpdateCursus(modifC);
    this.switch=true;
    this.modif=false;
    this.C={id_etudiant:0,id_etablissement:1,id_domaine:0,id_niveau:0,
      id_specialite:0,moyenne:10,credit:0,note_pfe:null,mention:'',au_debut:'2018',session:'Principale',au_fin:'2019'}

  }
  annuler(){
    this.switch=true;
    this.modif=false;
    this.C={id_etudiant:0,id_etablissement:1,id_domaine:0,id_niveau:0,
      id_specialite:0,moyenne:10,credit:0,note_pfe:null,mention:'',au_debut:'2018',session:'Principale',au_fin:'2019'}

  }

}
