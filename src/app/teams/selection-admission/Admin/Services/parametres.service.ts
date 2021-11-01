import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from './../../../../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class ParametresService {

  private auth_token = localStorage.getItem("token");
  private headers;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.auth_token}`,
    });
  }
  url=environment.url
  ajouterDomaine(Dom) {
    return this.http
      .post<any>(this.url+"/domaine", Dom, {
        headers: this.headers,
      })
      .subscribe();
  }
  ajouterSpecialite(Spec) {
    return this.http
      .post<any>(this.url+"/specialite", Spec, {
        headers: this.headers,
      })
      .subscribe();
  }
  ajouterNiveau(Niv) {
    return this.http
      .post<any>(this.url+"/niveau", Niv, { headers: this.headers })
      .subscribe();
  }
  getDomains() {
    return this.http.get<any>(this.url+"/domaine", {
      headers: this.headers,
    });
  }
  getSpecialites() {
    return this.http.get<any>(this.url+"/specialite", {
      headers: this.headers,
    });
  }
  getNiveaux() {
    return this.http.get<any>(this.url+"/niveau", {
      headers: this.headers,
    });
  }
  deleteNiveau(id){
  return  this.http.delete(this.url+'/niveau/'+id,{headers:this.headers});
  }
  deleteDomaine(id){
   return  this.http.delete(this.url+'/domaine/'+id,{headers:this.headers}); 
  }
  deleteSpecialite(id){
   return  this.http.delete(this.url+'/specialite/'+id,{headers:this.headers}); 
  }
  modifierNiveau(N){
    return  this.http.patch<any>(this.url+'/niveau',N,{headers:this.headers});
  }
  modifierDomaine(D){
    return  this.http.patch<any>(this.url+'/domaine',D,{headers:this.headers});
  }
  modifierSpecialite(S){
    return  this.http.patch<any>(this.url+'/specialite',S,{headers:this.headers});
  }
  ajouterClasse(classe) {
    return this.http
      .post(this.url+"/classe", classe, { headers: this.headers })
      .subscribe();
  }
  getclasses() {
    return this.http.get(this.url+"/classe", {
      headers: this.headers,
    });
  }
}
