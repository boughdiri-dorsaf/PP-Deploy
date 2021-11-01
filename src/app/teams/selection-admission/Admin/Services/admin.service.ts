import { environment } from './../../../../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  private auth_token = localStorage.getItem("token");
  private headers;
  
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.auth_token}`,
    });
  }
  url=environment.url
  authentifierAdmin(email: string, password: string) {
    var user = { email: email, password: password };
    return this.http.post(this.url+"/admin/login", user, {
      headers: this.headers,
    });
  }

  getUser(token,id) {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(this.url+"/admin/"+id, { headers: headers });
  }

}
