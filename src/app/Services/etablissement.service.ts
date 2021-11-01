import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface establishment{
  libelle:string;
  code_postale:string;
  rue:string;
  ville:string;
  gouvernorat_adresse:string;
  pays:string;

}
@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
  private auth_token=localStorage.getItem('token')
  private headers;
  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
   }
  ajouteretablissement(E:establishment){
    return  this.http.post('http://localhost:3000/etablissement',E,{headers:this.headers});
  }
  modifieretablissement(E:establishment){
    return  this.http.patch('http://localhost:3000/etablissement',E,{headers:this.headers});
  }
  getetablissements(){
    return  this.http.get('http://localhost:3000/etablissement',{headers:this.headers});
  }
  getetablissementbyId(id:number){
    return  this.http.get('http://localhost:3000/etablissement/'+id,{headers:this.headers});
  }
  deletetablissementby(id:number){
    return  this.http.delete('http://localhost:3000/etablissement/'+id,{headers:this.headers});
  }
}
