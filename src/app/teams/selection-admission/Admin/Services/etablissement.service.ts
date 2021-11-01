import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Establishment } from '../Models/etablissement';
import { environment } from './../../../../../environments/environment';

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
   url=environment.url
  ajouteretablissement(E):Observable<Establishment>{
    var  headers= new HttpHeaders({
      'Authorization': `Bearer ${this.auth_token}`
    })
    return  this.http.post<any>(this.url+'/etablissement',E,{headers:headers});
  }
  modifieretablissement(E):Observable<Establishment>{
    var  headers= new HttpHeaders({
      'Authorization': `Bearer ${this.auth_token}`
    })
    return  this.http.patch<any>(this.url+'/etablissement',E,{headers:headers});
  }
  getetablissements(){
    return  this.http.get<any>(this.url+'/etablissement',{headers:this.headers});
  }
  getetablissementbyId(id:number){
    return  this.http.get<any>(this.url+'/etablissement/'+id,{headers:this.headers});
  }
  deletetablissementby(id:number){
    return  this.http.delete(this.url+'/etablissement/'+id,{headers:this.headers});
  }
}
