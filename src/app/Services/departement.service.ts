import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface departement{
  code:string;
  libelle:string;
  description:string;
}
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
  ajouterDepartement(D:departement){
    return  this.http.post('http://localhost:3000/departement',D,{headers:this.headers});
  }
  modifierDepartement(D:departement){
    return  this.http.patch('http://localhost:3000/departement',D,{headers:this.headers});
  }
  getDepartements(){
    return  this.http.get('http://localhost:3000/departement',{headers:this.headers});
  }
  getDepartementbyId(id:number){
    return  this.http.get('http://localhost:3000/departement/'+id,{headers:this.headers});
  }
  deleteDepartement(id:number){
    return  this.http.delete('http://localhost:3000/departement/'+id,{headers:this.headers});
  }
  UpdateDepartement(D:departement){
    return  this.http.patch('http://localhost:3000/departement',D,{headers:this.headers});
  }
  DeleteDepartementbyId(id:number){
    return  this.http.delete('http://localhost:3000/departement/'+id,{headers:this.headers});
  }
}
