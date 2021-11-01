import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface master{
  nom:string,
  id_departement:number,
  seuil_admission:number,
  seuil_admis_attente:number,
  date_fin_master: string,
  id_etablissement:number
}
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private auth_token=localStorage.getItem('token')
  private headers;
  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
   
  } 
  ajoutermaster(M:master){
    return  this.http.post('http://localhost:3000/master',M,{headers:this.headers});
  }
  getmasters(){
    return this.http.get('http://localhost:3000/master',{headers:this.headers});
  }
  updatemaster(M){
    return  this.http.patch('http://localhost:3000/master',M,{headers:this.headers});
  }
  deletemaster(M){
    return  this.http.delete('http://localhost:3000/master/'+M,{headers:this.headers});
  }
  AppliquerMaster(M){
   var  headers= new HttpHeaders({
    'Authorization': `Bearer ${this.auth_token}`
  })
    return  this.http.post('http://localhost:3000/demandeMaster',M,{headers:headers}).subscribe();
  }
  GetDemandesMaster(){
    return this.http.get('http://localhost:3000/demandeMaster',{headers:this.headers});
  }
  GetEtatDemandesMaster(){
    return this.http.get('http://localhost:3000/etatDemande',{headers:this.headers});
  }

}
