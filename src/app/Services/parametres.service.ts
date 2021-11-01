import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametresService {
//libelle id_domaine
// 
 private auth_token=localStorage.getItem('token')
  private headers;
  constructor(private http:HttpClient) {
     this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })}

  ajouterDomaine(Dom){
  return  this.http.post('http://localhost:3000/domaine',Dom,{headers:this.headers}).subscribe();
  }
  ajouterSpecialite(Spec){
    return  this.http.post('http://localhost:3000/specialite',Spec,{headers:this.headers}).subscribe();
    }
    ajouterNiveau(Niv){
      return  this.http.post('http://localhost:3000/niveau',Niv,{headers:this.headers}).subscribe();
      }
  getDomains(){
  return  this.http.get('http://localhost:3000/domaine',{headers:this.headers})
  }
  getSpecialites(){
    return  this.http.get('http://localhost:3000/specialite',{headers:this.headers})
    }
  getNiveaux(){
    return  this.http.get('http://localhost:3000/niveau',{headers:this.headers})
  }
  ajouterClasse(classe){
    //libelle id_responsable_group nb_etudiant
    return  this.http.post('http://localhost:3000/classe',classe,{headers:this.headers}).subscribe();

  }
  getclasses(){
    return  this.http.get('http://localhost:3000/classe',{headers:this.headers})
    }
}
