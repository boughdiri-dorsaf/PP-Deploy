import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface User{
email:string;
password:string;
nom:string;
prenom:string;
age:number;
cin:string;
sexe:String;
num_passport:string;
date_naissance:string;
code_postale:string ;
rue:string;
ville:number;
id_role:number;
gouvernorat_adresse:number;
gouvern_naissance:string;
id_situation_professionnel:number;
pays: number;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private auth_token=localStorage.getItem('token')
  private headers;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
   }
   initialize(U:User){

   }
  RegisterUser(user:User){
    this.http.post('http://localhost:3000/users',user).subscribe();
  }
  authentifierUser(email:string,password:string){
    var user={email:email,password:password}
  return  this.http.post<any>('http://localhost:3000/users/login',user)
  }
  getUser(id:number,token){
    this.auth_token=token;
    return this.http.get('http://localhost:3000/users/'+id,{headers:this.headers});
  }
  resetpasswordUser(email:string){
    var user={email:email}
    return this.http.put('http://localhost:3000/api/users/forgotPassword',user);
  }



  ChangerPassword(user){
    var params={resetLink:user.resetLink,newPassword:user.newPassword}
    return this.http.put('http://localhost:3000/api/users/resetPassword',params);
  }
  AjouterResponable(user,Q){
    user.qualite=Q;
    this.http.post('http://localhost:3000/responsableGroup',user,{headers:this.headers}).subscribe();
  }
  GetResponable(){

  return  this.http.get('http://localhost:3000/responsableGroup',{headers:this.headers})
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
