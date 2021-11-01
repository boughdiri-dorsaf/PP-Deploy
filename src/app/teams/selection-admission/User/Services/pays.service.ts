import { environment } from './../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

   private auth_token=localStorage.getItem('token')
  private headers;
  constructor(private http:HttpClient) {
     this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
   }
   url=environment.url
  getPays(){
    return  this.http.get<any>(this.url+'/pays',{headers:this.headers});
  }
}
