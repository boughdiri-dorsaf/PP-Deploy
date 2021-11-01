import { environment } from './../../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Etudiant } from './../Models/etudiant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

   private auth_token=localStorage.getItem('token')
  private headers;
  constructor(private http:HttpClient) {
     this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
   }
   private url=environment.url
  getetudiant(id:number){
    return this.http.get<any>(this.url+'/etudiant/'+id,{headers:this.headers});
  }
  AddEtudiant(param):Observable<Etudiant>{
    return this.http.post<Etudiant>(this.url+'/etudiant/',param,{headers:this.headers});
  }
  GetLstSituations(){
    return  this.http.get(this.url+'/situation',{headers:this.headers})
    }
}
