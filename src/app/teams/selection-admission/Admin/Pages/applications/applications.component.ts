import { Subscription } from 'rxjs';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Component, OnInit } from "@angular/core";
import { MasterService } from "../../services/master.service";
import { CursusService } from "../../../User/services/cursus.service";

@Component({
  selector: "app-applications",
  templateUrl: "./applications.component.html",
  styleUrls: ["./applications.component.scss"],
})
export class ApplicationsComponent implements OnInit {
  lstmasters = [];
  selectedmaster = 1;
  p;
  lstDemandesmasters = [];
  Score={
    Malus:{RED0:null,RED1:null,RED2:null,RED3:null,RED4:null},
    BnS:null,
    BnM:{Pass:null,AssB:null,Bien:null,TBien:null},
    BC:null,
    CdM:null
    }
  constructor(private MS: MasterService, private modal: NgbModal,private CS:CursusService) {}
sub:Subscription;
  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('FormuleScore')));
    this.Score=JSON.parse(localStorage.getItem('FormuleScore'));
    this.MS.getmasters().subscribe((val) => {
      this.lstmasters = val.results;
    });
  this.sub=  this.MS.GetDemandesMaster().subscribe((val) => {
      
      for (let i = 0; i < val.results.length; i++) {
        
        this.CS.getCursus(val.results[i].id_user).subscribe(Cursuss=>{
          
          val.results[i].lstCursus=Cursuss.results;
         
        });
        
      }
     
      this.lstDemandesmasters = val.results;
      console.log(this.lstDemandesmasters);
      
      this.selectedmasterresult();
    });
  }
  refreshlist(){
    this.sub.unsubscribe();
setTimeout(() => {
  this.sub=   this.MS.GetDemandesMaster().subscribe((val) => {
      
    for (let i = 0; i < val.results.length; i++) {
      
      this.CS.getCursus(val.results[i].id_user).subscribe(Cursuss=>{
        
        val.results[i].lstCursus=Cursuss.results;
       
      });
      
    }
   
    this.lstDemandesmasters = val.results;
    console.log(this.lstDemandesmasters);
    
    this.selectedmasterresult();
  });
}, 300);
  }
  ChangerEtatDemandeMaster(item,idetat){
    console.log(item);
  var  param={id_etat_demande_master:idetat,
      id_demande:item.id_demande}

    this.MS.SetEtatDemandesMaster(param).subscribe();
    this.refreshlist();
  }
  calculerScore(Demande){
  
     //[(Moyenne ArithmetiquexMalus)*0.5+(Bonus Mention)*0.2+(Bonus Session)*0.2+(Bonus Credit)*0.2]
     var moyArith=0;
     var BM=0;
     var BS=0;
     var BC=0
     var Malus=1;
     
    if(this.Score){
      if(Demande.lstCursus!=undefined){
        Demande.lstCursus.forEach(Cursus => {
           BC+=Cursus.credit;
           if(Cursus.note_pfe!=null){
             moyArith+=Cursus.note_pfe;
           }
          
           if(Cursus.session=="Principale"){
              BS+=this.Score.BnS;
           }
           if(Cursus.mention=='Passable'){
            BM+=this.Score.BnM.Pass
           }
           else if(Cursus.mention=='Bien'){
             BM+=this.Score.BnM.AssB
          }
          else if(Cursus.mention=='Trés Bien'){
             BM+=this.Score.BnM.Bien
          }
          else if(Cursus.mention=='Excellent'){
             BM+=this.Score.BnM.TBien
          }
       moyArith+= Cursus.moyenne;
         });
        
       }
       if(Demande.session=="Principale"){
        BS+=this.Score.BnS;
     }
     if(Demande.mention=='Passable'){
      BM+=this.Score.BnM.Pass
     }
     else if(Demande.mention=='Bien'){
       BM+=this.Score.BnM.AssB
    }
    else if(Demande.mention=='Trés Bien'){
       BM+=this.Score.BnM.Bien
    }
    else if(Demande.mention=='Excellent'){
       BM+=this.Score.BnM.TBien
    }
    moyArith+=Demande.moyenne;
       if(this.Score.Malus.RED0!=null){
         if(Demande.Redoublement==0 && this.Score.Malus.RED0==true ){
             Malus=1
         }
       }
       if(this.Score.Malus.RED1!=null){
        if(Demande.Redoublement==1 && this.Score.Malus.RED1==true ){
          Malus=0.8
        }
      }
      if(this.Score.Malus.RED2!=null){
        if(Demande.Redoublement==2 && this.Score.Malus.RED2==true ){
          Malus=0.6
        }
      }
      if(this.Score.Malus.RED3!=null){
        if(Demande.Redoublement==3 && this.Score.Malus.RED3==true ){
          Malus=0.4
        }
      }
      if(this.Score.Malus.RED4!=null){
        if(Demande.Redoublement==4 && this.Score.Malus.RED4==true ){
          Malus=0.2
        }
      }
      return (moyArith*Malus)*0.5+(BM)*0.2+(BS)*0.2+(BC)*0.2
    }
    else {
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
  open3(content) {
    this.modal.open(content, { ariaLabelledBy: "Niveau" }).result.then(
      (result) => {},
      (reason) => {}
    );
  }
}
