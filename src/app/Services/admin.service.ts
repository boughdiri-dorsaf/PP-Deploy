import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
private auth_token=localStorage.getItem('token')
  private headers;
  constructor(private http:HttpClient) {
     this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
   }
  authentifierAdmin(email:string,password:string){
    var user={email:email,password:password}
  return  this.http.post('http://localhost:3000/admin/login',user,{headers:this.headers})
  }
  getUser(token){
   
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.get('http://localhost:3000/admin/',{headers:headers});
  }
  emailverif(email){
    var checkpass=new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
 var   ok=false;
     if(email!=undefined)
     {if(checkpass.test(email))
       {ok= true;}
     }
     return ok;
   }
}
