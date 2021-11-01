import { environment } from './../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { JwtHelperService ,JwtModule} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private auth_token=localStorage.getItem('token')
  private headers;
  public  isloggedin=false;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
   }
   public isAuthenticated(): boolean {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');

    return !helper.isTokenExpired(token);
  }
  url=environment.url
  RegisterUser(user:User){
    return this.http.post<any>(this.url+'/users',user);
  }
  authentifierUser(email:string,password:string){
    var user={email:email,password:password}
    return this.http.post<any>(this.url+'/users/login',user)
  }
  getUser(id:number,token){
    this.auth_token=token;
    return this.http.get<any>(this.url+'/users/'+id,{headers:this.headers});
  }
  getAdmin(id:number,token){
    this.auth_token=token;
    return this.http.get<any>(this.url+'/admin/'+id,{headers:this.headers});
  }
  resetpasswordUser(email:string){
    var user={email:email}
    return this.http.patch(this.url+'/users/forgotPassword',user);
  }
  ChangerPassword(user){
    var params={resetLink:user.resetLink,newPassword:user.newPassword,email:user.email}
    return this.http.patch(this.url+'/users/resetPassword',params);
  }


  activeInscription(email:string){
    var user={email:email}
    return this.http.patch('http://localhost:3000/users/activeVerification',user);
  }

  AjouterResponable(user,Q){
    user.qualite=Q;
    this.http.post<User>(this.url+'/responsableGroup',user,{headers:this.headers}).subscribe();
  }
  GetResponable(){
  return  this.http.get(this.url+'/responsableGroup',{headers:this.headers})
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
