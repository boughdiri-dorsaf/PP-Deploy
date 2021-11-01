import { environment } from './../../../../../environments/environment';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cursus } from '../Models/cursus';

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
   private url=environment.url
  addCursus(C:Cursus){
     return this.http.post<Cursus>(this.url+'/cursus',C,{headers:this.headers}).subscribe();
  }
  UpdateCursus(C:Cursus){
    return this.http.patch<Cursus>(this.url+'/cursus',C,{headers:this.headers}).subscribe(val=>{
     
    });
 }
  deleteCursus(id){
    return this.http.delete(this.url+'/cursus/'+id,{headers:this.headers}).subscribe();
  }
  getCursus(id){
    return this.http.get<any>(this.url+'/cursus/'+id,{headers:this.headers})
  }
}
