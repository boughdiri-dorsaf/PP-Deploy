import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departement } from '../Models/departement';
import { environment } from './../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private auth_token=localStorage.getItem('token')
  private headers;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
   }
   url=environment.url
  ajouterDepartement(D:Departement):Observable<Departement>{
    return  this.http.post<Departement>(this.url+'/departement',D,{headers:this.headers});
  }
  modifierDepartement(D:Departement){
    return  this.http.patch<Departement>(this.url+'/departement',D,{headers:this.headers});
  }
  getDepartements(){
    return  this.http.get<any>(this.url+'/departement',{headers:this.headers});
  }
  getDepartementbyId(id:number){
    return  this.http.get(this.url+'/departement/'+id,{headers:this.headers});
  }
  deleteDepartement(id:number){
    return  this.http.delete(this.url+'/departement/'+id,{headers:this.headers});
  }
  UpdateDepartement(D:Departement):Observable<Departement>{
    return  this.http.patch<Departement>(this.url+'/departement',D,{headers:this.headers});
  }
  DeleteDepartementbyId(id:number){
    return  this.http.delete(this.url+'/departement/'+id,{headers:this.headers});
  }
}
