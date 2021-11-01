import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from './../../popup/popup.component';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { UserService } from './../../teams/selection-admission/User/Services/user.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

interface Alert {
  type: string;
  message: string;
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  email = '';
  password = ''
  alerts = [];
  message ="";
  compteur =0 ;
  click : boolean = false;


  // Auth Guard
  constructor(private router: Router, private US: UserService, private route: Router, private modalService: NgbModal) { }

  ngOnInit() {
    if (this.US.isAuthenticated()) {
      if (localStorage.getItem('role') == '10') {
        this.route.navigateByUrl('dashadminmaster');

      }
      else {
        this.router.navigate(['dashboard']);

      }
      return false;
    }



  }

  Login() {

    if(this.message == "Mot de passe erroné" && this.compteur > 3){
        this.click = !this.click;
        swal({
          title: "Alerte",
          className: 'swal-title',
          text: "Actauliser la page pour continuer ...",
          icon: "info",
          buttons: { confirm: { text: 'ok', visible: true } },
          dangerMode: false,
        })
          .then((res) => {
            if (res) {
              location.reload();
            }
          });
    }

    this.US.authentifierUser(this.email, this.password).subscribe(val => {


      if (val.message == "login successfully") {

        localStorage.setItem('token', val.token)

        localStorage.setItem('id', val.id_user)
        localStorage.setItem('role', val.role)
          if (val.role == 10) {
            this.route.navigateByUrl('dashadminmaster');
          }
          else {
            this.route.navigateByUrl('dashboard');
          }
          this.US.isloggedin = true;
      }else if(val.message == "Email n'est pas verifie"){
        this.message = val.message;
        this.compteur ++;
        var alert1 = {
          type: 'danger',
          message: "Il faut activer votre compte !"
        };

        this.alerts.push({
          type: 'danger',
          message: "Il faut activer votre compte !"
        })
        var i = this.alerts.indexOf(alert1);


        return;
      }
      else {

        this.message = val.message;
        this.compteur ++;
        var alert = {
          type: 'danger',
          message: val.message
        };

        this.alerts.push({
          type: 'danger',
          message: val.message
        })
        var i = this.alerts.indexOf(alert);


        return;
      }
    });
  }

  closealert(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }


  resetpassword() {
    swal(
      "Veuillez saisir votre adresse email", {

      content: { element: "input" },
      title: 'Réinitialisation mot de passe',
      buttons: {
        cancel: { closeModal: true, text: 'Annuler', visible: true },
        confirm: { text: 'Valider', visible: true },

      },
    })
      .then((value) => {
        if (value == null) {

          return
        }
        if (!this.US.emailverif(value)) {
          swal("Erreur", "Email non valide", "error").then(() => {
            this.resetpassword();
          });
          return
        }
        this.US.resetpasswordUser(value).subscribe((val) => {
          //@ts-ignore
          if (val.success == 0) {
            swal("Réinitialisation ", "Cette adresse mail n'existe pas", "error");
            return
          }
          localStorage.setItem('mail', value);
          swal("Réinitialisation ", "Lien de réinitialisation du nouveau mot de passe est envoyé avec succés", "success");
        });

      });
  }
}
