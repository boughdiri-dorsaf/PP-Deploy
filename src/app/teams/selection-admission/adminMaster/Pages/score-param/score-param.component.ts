import { AdminMasterServiceService } from './../../Services/admin-master-service.service';
import { Score } from './../../Models/score';
import  swal  from 'sweetalert';
import { Component, OnInit } from '@angular/core';
import { getValueInRange } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-score-param',
  templateUrl: './score-param.component.html',
  styleUrls: ['./score-param.component.scss']
})
export class ScoreParamComponent implements OnInit {
  Redoub=0;
  id=0;
  includePFE=false;
  Score:Score={
    Malus:{RED0:null,RED1:null,RED2:null,RED3:null,RED4:null},
    BnS:null,
    BnM:{Pass:null,AssB:null,Bien:null,TBien:null},
    BC:null,
    CdM:null,
    sem5:null,
    pfe:0
    }
  constructor(private ADM:AdminMasterServiceService) { }

  ngOnInit() {
    console.log(localStorage.getItem('FormuleScore'));

    this.ADM.getAdminbyId(Number(localStorage.getItem('id'))).subscribe(val=>{
   this.Score.id_master=val.results[0].id_master;
      this.id=val.results[0].id_master;
      this.ADM.getscoreId(this.id).subscribe(val=>{
        console.log(val)
        console.log(val.results[0].attr_score)
        val.results.forEach(element => {
          if(element.attr_score==='BC'){this.Score.BC=element.valeur}
          if(element.attr_score==='AssB'){ this.Score.BnM.AssB=element.valeur}
          if(element.attr_score==='Bien'){this.Score.BnM.Bien=element.valeur}
          if(element.attr_score==='Pass'){this.Score.BnM.Pass=element.valeur}
          if(element.attr_score==='TBien'){this.Score.BnM.TBien=element.valeur}
          if(element.attr_score==='BnS'){this.Score.BnS=element.valeur}
          if(element.attr_score==='CdM'){this.Score.CdM=element.valeur}
          console.log(element.valeur)
          if(element.attr_score==='RED0'){this.Score.Malus.RED0=element.valeur}
          if(element.attr_score==='RED1'){this.Score.Malus.RED1=element.valeur}
          if(element.attr_score==='RED2'){this.Score.Malus.RED2=element.valeur}
          if(element.attr_score==='RED3'){this.Score.Malus.RED3=element.valeur}
          if(element.attr_score==='RED4'){  this.Score.Malus.RED4=element.valeur}
          if(element.attr_score==='sem5'){this.Score.sem5=element.valeur}
          if(element.attr_score==='pfe'){this.Score.pfe=element.valeur;this.includePFE=element.active}
        });
      },
      err=>{
        console.log(err)
        this.Score=JSON.parse(localStorage.getItem('FormuleScore'))
      }
      );
    });

  }
  enregistrerScore(){
    let body={id_master:this.id,
      rows:[
      {name:'Bonus C',value:this.Score.BC,attr:'BC',active:1},
      {name :'Bien',value:this.Score.BnM.Bien,attr:'Bien',active:1},
      {name:'Assez Bien',value:this.Score.BnM.AssB,attr:'AssB',active:1},
      {name :'Passable',value:this.Score.BnM.Pass,attr:'Pass',active:1},
      {name:'Tres Bien',value:this.Score.BnM.TBien,attr:'TBien',active:1},
      {name :'BonusS',value:this.Score.BnS,attr:'BnS',active:1},
      {name:'Coefficient Moy',value:this.Score.CdM,attr:'CdM',active:1},
      {name :'0',value:this.Score.Malus.RED0,attr:'RED0',active:1},
      {name:'1',value:this.Score.Malus.RED1,attr:'RED1',active:1},
      {name:'2',value:this.Score.Malus.RED2,attr:'RED2',active:1},
      {name:'3',value:this.Score.Malus.RED3,attr:'RED3',active:1},
      {name:'4',value:this.Score.Malus.RED4,attr:'RED4',active:1},
     {name :'Semestre 5',value:this.Score.sem5,attr:'sem5',active:1},
     {name :'PFE',value:this.Score.pfe,attr:'pfe',active:this.getValue()},
    ]}
      this.ADM.getscoreId(this.id).subscribe(val=>{
        console.log(val)
        this.ADM.UpdateScore(body).subscribe(val=>{
            console.log(val)
        })
      },
      err=>{
        console.log(err)

        this.ADM.CreateScore(body).subscribe(val=>{
          console.log(val)
        })
      }
      )
    localStorage.setItem('FormuleScore',JSON.stringify(this.Score));
    console.log(this.Score);
    swal("Formule Score", "Score a été ajouté avec succés", "success");
  }
getValue(){
  if(this.includePFE)
  return 1
  else
  return 0
}
}
