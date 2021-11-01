import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Master } from '../Models/master';
import { environment } from './../../../../../environments/environment';

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
  url=environment.url
  ajoutermaster(M:Master):Observable<Master>{
    return  this.http.post<Master>(this.url+'/master',M,{headers:this.headers});
  }
  getmasters(){
    return this.http.get<any>(this.url+'/master',{headers:this.headers});
  }
  updatemaster(M:Master):Observable<Master>{
    return  this.http.patch<Master>(this.url+'/master',M,{headers:this.headers});
  }
  deletemaster(M){
    return  this.http.delete(this.url+'/master/'+M,{headers:this.headers});
  }
  getNBapplicants(M){
    return  this.http.get(this.url+'/master/applicants/'+M,{headers:this.headers});
  }
  AppliquerMaster(M){
   var  headers= new HttpHeaders({
    'Authorization': `Bearer ${this.auth_token}`
  })
    return  this.http.post(this.url+'/demandeMaster',M,{headers:headers}).subscribe();
  }
  GetDemandesMaster(){
    return this.http.get<any>(this.url+'/demandeMaster',{headers:this.headers});
  }
  GetDemandesMasterByadminMaster(id){
    return this.http.get<any>(this.url+'/demandeMaster/Adminmaster/'+id,{headers:this.headers});
  }
  //Adminmaster
  SetEtatDemandesMaster(M){
    return this.http.patch<any>(this.url+'/demandeMaster/etat',M,{headers:this.headers});
  }
  updateNotesDemandeMaster(M)
{
  return this.http.patch<any>(this.url+'/demandeMaster/noteDemande',M,{headers:this.headers});

}
  AccepterMaster(){

  }

}
