import { Score } from './../Models/score';
import { environment } from './../../../../../environments/environment';
import { Master } from './../../Admin/Models/master';
import { User } from './../../User/Models/user';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class AdminMasterServiceService {
  private auth_token = localStorage.getItem("token");
  private headers;

  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.auth_token}`,
    });
  }
  url=environment.url
  getAdminbyId(id) {
    return this.http.get<any>(this.url+"/adminMaster/"+id, { headers: this.headers });
  }
  getAdmins() {

    return this.http.get<any>(this.url+"/adminMaster", { headers: this.headers });
  }
  EnvoyerRequeteAdmin(user:User){
   return this.http.post<any>(this.url+'/adminMaster',user);
  }
  verifAdminInscrits(id){
    return this.http.get<User>(this.url+'/adminMaster/master/'+id);
  }
  checkemailexist(email){
    return this.http.get<any>(this.url+'/adminMaster/exist/'+email);
  }
  UpdateAdminMaster(master:Master){
    return this.http.post<any>(this.url+'/adminMaster/master/',master);
  }
  CreateScore(Score){
    return this.http.post<any>(this.url+'/adminMaster/score/',Score);
  }
  getscoreId(id) {
    return this.http.get<any>(this.url+"/adminMaster/score/"+id, { headers: this.headers });
  }
  UpdateScore(Score){
    return this.http.patch<any>(this.url+'/adminMaster/score/',Score);
  }
  ExporterPDF(lststudents){
    return this.http.post(this.url+'/adminMaster/export/',lststudents,{ responseType: 'blob' }).subscribe(val=>{
      FileSaver.saveAs(val, 'Liste des etudiants');
    });
  }

  bubbleSort( arr, n)
{
var i, j;
for (i = 0; i < n-1; i++)
{
    for (j = 0; j < n-i-1; j++)
    {
        if (arr[j] > arr[j+1])
        {
          var temp=arr[j];
          arr[j]=arr[j+1]
          arr[j+1]=temp
        }
    }

}
}

}
