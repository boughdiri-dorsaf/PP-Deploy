import { environment } from './../../../../../environments/environment';
import { cursusGene } from './../../../../services/cursusgeneral.service';
import { Injectable } from '@angular/core';
import { CursusGenerale } from '../Models/cursus-generale';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursusgeneralService {
  private auth_token=localStorage.getItem('token')
  private headers;
  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
  }
  private url=environment.url
  addcursusG(C:CursusGenerale){
    return this.http.post<CursusGenerale>(this.url+'/cursusG',C,{headers:this.headers}).subscribe();
 }
 UpdatecursusG(C:CursusGenerale){
   return this.http.patch<CursusGenerale>(this.url+'/cursusG/',C,{headers:this.headers}).subscribe(val=>{
    
   }); 
}
 deleteBacclaureat(id){
   return this.http.delete(this.url+'/Bacclaureat/'+id,{headers:this.headers}).subscribe();
 } 
 getcursusG(id){
   return this.http.get<any>(this.url+'/cursusG/'+id,{headers:this.headers})
 }
}
