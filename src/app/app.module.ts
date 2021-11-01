import { AuthGuardService } from './teams/selection-admission/User/Services/auth-guard.service';
import { DashboardAdminComponent } from './teams/selection-admission/Admin/Pages/dashboard/dashboard.component';


import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule} from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardDefaultComponent } from './pages/dashboard/dashboard-default/dashboard-default.component';
import { SimplePageComponent } from './pages/simple-page/simple-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { PopupComponent } from './popup/popup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { AuthAdminComponent } from './teams/selection-admission/Admin/Pages/auth-admin/auth-admin.component';
import { AdminComponent } from './menu/admin/admin.component';
import { AuthComponent } from './authentification/auth/auth.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { UserComponent } from './menu/user/user.component';
import { ResetpasswordComponent } from './authentification/resetpassword/resetpassword.component';
import { HomepageAdComponent } from './teams/selection-admission/Admin/Pages/homepage-ad/homepage-ad.component';
import { EstablishementsComponent } from './teams/selection-admission/Admin/Pages/establishements/establishements.component';
import { DepartmentComponent } from './teams/selection-admission/Admin/Pages/department/department.component';
import { CursusComponent } from './teams/selection-admission/User/Pages/cursus/cursus.component';
import { ApplicationsComponent } from './teams/selection-admission/Admin/Pages/applications/applications.component';
import { ResponsableComponent } from './teams/selection-admission/Admin/Pages/responsable/responsable.component';
import { ParametresComponent } from './teams/selection-admission/Admin/Pages/parametres/parametres.component';
import { DashboardComponent } from './teams/selection-admission/User/Pages/dashboard/dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ConditionsComponent } from './teams/selection-admission/User/Pages/conditions/conditions.component';
import { AdminMasterComponent } from './teams/selection-admission/Admin/Pages/admin-master/admin-master.component';

export function tokenGetter1() {
  return localStorage.getItem("access_token");
}
import { HomepageAdminMasterComponent } from './teams/selection-admission/adminMaster/Pages/homepage-admin-master/homepage-admin-master.component';
import { AdminMasterdashboardComponent } from './teams/selection-admission/adminMaster/Pages/admin-masterdashboard/admin-masterdashboard.component';
import { AdminMasterMenuComponent } from './menu/admin-master-menu/admin-master-menu.component';
import { ScoreParamComponent } from './teams/selection-admission/adminMaster/Pages/score-param/score-param.component';
import { VerifierinscriComponent } from './authentification/verifierinscri/verifierinscri.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthAdminComponent,
    DashboardAdminComponent,
    AdminComponent,
    DashboardDefaultComponent,
    SimplePageComponent,
    HomePageComponent,
    ProfileComponent,
    PopupComponent,
    AuthComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    UserComponent,
    ResetpasswordComponent,
    HomepageAdComponent,
    AuthAdminComponent,
    EstablishementsComponent,
    DepartmentComponent,
    CursusComponent,
    ApplicationsComponent,
    ResponsableComponent,
    ParametresComponent,
    ConditionsComponent,
    AdminMasterComponent,
    HomepageAdminMasterComponent,
    AdminMasterdashboardComponent,
    AdminMasterMenuComponent,
    ScoreParamComponent,
    VerifierinscriComponent,
  ],
  imports: [
    BrowserModule,NgbModule,NgxPaginationModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,


    FormsModule,
    ReactiveFormsModule,

  ],
  entryComponents: [PopupComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
