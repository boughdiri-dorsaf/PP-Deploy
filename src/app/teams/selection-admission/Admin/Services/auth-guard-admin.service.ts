import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../../User/Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService implements CanActivate{

  constructor(public auth: UserService, public router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['admin']);
      
      return false;
    }
   console.log( this.router);
    return true;
  }
}
