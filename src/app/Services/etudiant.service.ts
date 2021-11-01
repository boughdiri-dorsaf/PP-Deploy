import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface etudiant{
id_situation_etudiant:string;
id_departement:number
id_user:number
}
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

   private auth_token=localStorage.getItem('token')
  private headers;
  constructor(private http:HttpClient) {
     this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
   }
  getetudiant(id:number){
    return this.http.get('http://localhost:3000/etudiant/'+id,{headers:this.headers});
  }
  AddEtudiant(param){
    return this.http.post('http://localhost:3000/etudiant/',param);
  }
  GetLstSituations(){
   
    return  this.http.get('http://localhost:3000/situation',{headers:this.headers})
    }
}
