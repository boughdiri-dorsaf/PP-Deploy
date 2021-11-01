import swal from "sweetalert";

import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "../../../User/Services/user.service";
import { DepartementService } from "../../services/departement.service";
import { Departement } from "../../Models/departement";

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.scss"],
})
export class DepartmentComponent implements OnInit {
  tabdepartment = false;
  formdepartment = true;
  page;
  sub: Subscription;
  constructor(private US: UserService, private DS: DepartementService) {}
  lstdepartment: Departement[] = [];
  D: Departement ={libelle:'',description:'',code:''};
  user:any;
  ngOnInit() {
    this.US.getUser(
      Number(localStorage.getItem("id")),
      localStorage.getItem("token")
    ).subscribe((val) => {
      console.log(val);
      //@ts-ignore
      this.user = val.rows[0];
    });
    this.sub = this.DS.getDepartements().subscribe((val) => {
      console.log(val);
      var lst = [];

      for (let i = 0; i < val.results.length; i++) {
        lst.push(val.results[i]);
      }
      this.lstdepartment = lst;
    });
  }

  modif = false;
  modifier(dep) {
    this.tabdepartment = true;
    this.formdepartment = false;
    this.modif = true;
    this.D = dep;
  }
  enregistrer() {
    {
      this.tabdepartment = false;
      this.formdepartment = true;
      this.modif = false;
      this.DS.UpdateDepartement(this.D).subscribe();
      swal("Departement", "changements enregistré avec succée", "success");
    }
  }
  refreshDepartement() {
    this.lstdepartment = new Array();
    this.sub.unsubscribe();
   setTimeout(() => {
    this.sub = this.DS.getDepartements().subscribe((val) => {
      for (let i = 0; i < val.results.length; i++) {
        this.lstdepartment.push(val.results[i]);
      }
      console.log(this.lstdepartment);
    });
   }, 300);
  }
  emptydep(){
    this.D = new Departement("", "", "");
  }
  SupprimerDep(Dep) {
    var id = Dep.id_departement;
    swal({
      title: "Departement",
      text: "Voulez vous Vraiment Supprimer  cette Departement  ?",
      icon: "warning",
      buttons: ["Non", "Oui"],
      dangerMode: false,
    }).then((willDelete) => {
      if (willDelete) {
        this.DS.deleteDepartement(id).subscribe();
        swal("Departement", "Departement Supprimé avec succée", "success");
        setTimeout(() => {
          this.refreshDepartement();
        }, 900);
      }
    });
  }
  AjouterDepartement() {
    {
      swal("Departement", "Departement Ajouté avec succée", "success");
      this.tabdepartment = false;
      this.formdepartment = true;
      this.DS.ajouterDepartement(this.D).subscribe((val) => {
       
      });
      this.D = new Departement("", "", "");
      this.refreshDepartement()
    }
  }
}
