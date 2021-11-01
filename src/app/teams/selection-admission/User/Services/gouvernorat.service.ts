import { environment } from './../../../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GouvernoratService {
  private auth_token=localStorage.getItem('token')
  private headers;

  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
  }
  private url=environment.url
  getGouvernorats(){
    return  this.http.get<any>(this.url+'/gouvernerat',{headers:this.headers});
  }
}
