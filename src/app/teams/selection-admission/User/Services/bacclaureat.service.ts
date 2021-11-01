import { environment } from './../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bacclaureat } from '../Models/bacclaureat';

@Injectable({
  providedIn: 'root'
})
export class BacclaureatService {
  private auth_token=localStorage.getItem('token')
  private headers;
  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
  }
  private url=environment.url
  addBacclaureat(C:Bacclaureat){
    return this.http.post<Bacclaureat>(this.url+'/bacclaureat',C,{headers:this.headers}).subscribe();
 }
 UpdateBacclaureat(C:Bacclaureat){
   return this.http.patch<Bacclaureat>(this.url+'/bacclaureat/',C,{headers:this.headers}).subscribe(val=>{
    
   });
}
 deleteBacclaureat(id){
   return this.http.delete(this.url+'/Bacclaureat/'+id,{headers:this.headers}).subscribe();
 }
 getBacclaureat(id){
   return this.http.get<any>(this.url+'/bacclaureat/'+id,{headers:this.headers})
 }
}
