import { VerifierinscriComponent } from './authentification/verifierinscri/verifierinscri.component';
import { ScoreParamComponent } from './teams/selection-admission/adminMaster/Pages/score-param/score-param.component';

import { AdminMasterComponent } from './teams/selection-admission/Admin/Pages/admin-master/admin-master.component';
import { ConditionsComponent } from './teams/selection-admission/User/Pages/conditions/conditions.component';



import { NgModule } from "@angular/core";
import { Routes, RouterModule,CanActivate  } from "@angular/router";


import { DashboardDefaultComponent } from "./pages/dashboard/dashboard-default/dashboard-default.component";
import { HomeComponent } from "./pages/home/home.component";

import { SimplePageComponent } from "./pages/simple-page/simple-page.component";
import { ProfileComponent } from "./pages/user/profile/profile.component";

//Admin Pages
import { HomepageAdComponent } from "./teams/selection-admission/Admin/Pages/homepage-ad/homepage-ad.component";
import { ApplicationsComponent } from "./teams/selection-admission/Admin/Pages/applications/applications.component";
import { ResponsableComponent } from "./teams/selection-admission/Admin/Pages/responsable/responsable.component";
import { ParametresComponent } from "./teams/selection-admission/Admin/Pages/parametres/parametres.component";
import { DashboardAdminComponent } from "./teams/selection-admission/Admin/Pages/dashboard/dashboard.component";
import { EstablishementsComponent } from "./teams/selection-admission/Admin/Pages/establishements/establishements.component";
import { DepartmentComponent } from "./teams/selection-admission/Admin/Pages/department/department.component";
import { DashboardComponent } from "./teams/selection-admission/User/Pages/dashboard/dashboard.component";
import { CursusComponent } from "./teams/selection-admission/User/Pages/cursus/cursus.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { AuthComponent } from "./authentification/auth/auth.component";
import { SignupComponent } from "./authentification/signup/signup.component";
import { ResetpasswordComponent } from "./authentification/resetpassword/resetpassword.component";
import { AuthAdminComponent } from "./teams/selection-admission/Admin/Pages/auth-admin/auth-admin.component";
import { AuthGuardService as AuthGuard } from "./teams/selection-admission/User/Services/auth-guard.service";
import { AuthGuardAdminService as AuthGuardAdmin } from "./teams/selection-admission/Admin/Services/auth-guard-admin.service";
import { HomepageAdminMasterComponent } from './teams/selection-admission/adminMaster/Pages/homepage-admin-master/homepage-admin-master.component';
import { AdminMasterdashboardComponent } from './teams/selection-admission/adminMaster/Pages/admin-masterdashboard/admin-masterdashboard.component';

//Admin Pages

const routes: Routes = [
  { path: "", component: HomeComponent },
  // {path: "default",component: DashboardDefaultComponent,},
  { path: "auth", component: AuthComponent },
  { path: "Conditions", component: ConditionsComponent },
  { path: "signup", component: SignupComponent },
  { path: "resetpassword/:token", component: ResetpasswordComponent },
  { path: "verifierInscription/:token", component: VerifierinscriComponent },
  { path: "admin", component: AuthAdminComponent },
  {
    path: "dashadmin",
    component: HomepageAdComponent,canActivate: [AuthGuardAdmin],
    children: [
      { path: "", component: DashboardAdminComponent,canActivate: [AuthGuardAdmin] },
      { path: "applications", component: ApplicationsComponent,canActivate: [AuthGuardAdmin] },
    //  { path: "responsable", component: ResponsableComponent },
      { path: "parametres", component: ParametresComponent,canActivate: [AuthGuardAdmin] },
      { path: "etablissment", component: EstablishementsComponent,canActivate: [AuthGuardAdmin] },
      { path: "department", component: DepartmentComponent,canActivate: [AuthGuardAdmin] },
      { path: "adminMaster", component: AdminMasterComponent,canActivate: [AuthGuardAdmin] },
    ],
  },
  {
    path: "dashadminmaster",
    component: HomepageAdminMasterComponent,
    children: [

      { path: "", component: AdminMasterdashboardComponent },
      { path: "score", component: ScoreParamComponent },

    ],
  },
  {
    path: "dashboard",
    component: HomePageComponent,canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "profil",
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },

      { path: "Cursus",canActivate: [AuthGuard], component: CursusComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
