import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface cursus{
  id_cursus?:number;
  au_fin:string;
  au_debut:string;
moyenne:number//
credit:number;//
mention:string;//
session:string;//
id_specialite:number;//
note_pfe:number;//
id_domaine:number;//
id_etablissement:number;//
id_niveau:number;//
id_etudiant:number;//
}
@Injectable({
  providedIn: 'root'
})
export class CursusService {
  private auth_token=localStorage.getItem('token')
  private headers;
  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
   }
  addCursus(C){
     return this.http.post('http://localhost:3000/cursus',C,{headers:this.headers}).subscribe();
  }
  UpdateCursus(C){
    return this.http.patch('http://localhost:3000/cursus',C,{headers:this.headers}).subscribe(val=>{
      console.log(val)
    });
 }
  deleteCursus(id){
    return this.http.delete('http://localhost:3000/cursus/'+id,{headers:this.headers}).subscribe();
  }
  getCursus(id){
    return this.http.get('http://localhost:3000/cursus/'+id,{headers:this.headers})
  }
}
