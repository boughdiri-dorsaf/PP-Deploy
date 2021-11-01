import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaysService } from './../../teams/selection-admission/User/Services/pays.service';
import { GouvernoratService } from './../../teams/selection-admission/User/Services/gouvernorat.service';
import { VilleService } from './../../teams/selection-admission/User/Services/ville.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../teams/selection-admission/User/Services/user.service';
import { User } from '../../teams/selection-admission/User/Models/user';
import moment from 'moment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  firstphase = false;
  secondphase = true;
  thirdphase = true;
  lsTGov = [];
  lstVille = [];
  lstPays = [];
  constructor(private modal: NgbModal, private US: UserService, private route: Router, private Ville: VilleService, private Gouvernarat: GouvernoratService, private Pays: PaysService) { }
  userPlatform: User = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    rue: "",
    ville: '1',
    gouvernorat_adresse: '1',
    id_role: 1,
    num_passport: "",
    cin: null,
    age: 0,
    sexe: "",
    date_naissance: "",
    code_postale: "",
    pays: '1',
    gouvern_naissance: 'Medina',
    id_situation_professionnel: 1
  }
  confirmpassword = '';


  ngOnInit() {
    this.Gouvernarat.getGouvernorats().subscribe(val => {
      this.lsTGov = val.results
    })
    this.Ville.getVille().subscribe(val => {
      this.lstVille = val.results
    })
    this.Pays.getPays().subscribe(val => {
      this.lstPays = val.results;
    })
  }
  conditions = false;

  returnPays(id) {
    var ch = ''
    for (let i = 0; i < this.lstPays.length; i++) {
      if (this.lstPays[i].id_pays == id) {
        ch = this.lstPays[i].libelle_pays;
        break;
      }

    }
    return ch
  }

  errormsg = true;
  msg = ''
  email = ''
  pwd = ''
  year = new Date().getFullYear() - 18;
  maxdateN = moment(this.year + '-01-01').format('YYYY-MM-DD')
  mindateN = moment('1990-01-01').format('YYYY-MM-DD')

  returnsituation(id) {
    if (id == 1) { return 'Employé(e)' }
    if (id == 2) { return 'Etudiant(e)' }
    if (id == 3) { return 'Autre' }
  }

  FirsttoSecond() {
    this.firstphase = true;
    this.secondphase = false;
  }

  SecondtoFirst() {
    this.firstphase = false;
    this.secondphase = true;
  }

  Register() {


    this.US.RegisterUser(this.userPlatform).subscribe(val => {

      if (val.message == "Vous avez déjà un compte") {
        swal({
          title: "Alerte",
          className: 'swal-title',
          text: "Vous avez deja un compte avec cette email !",
          icon: "error",
          buttons: { confirm: { text: 'ok', visible: true } },
          dangerMode: false,
        })
      }
      else {
        swal({
          title: "Inscription",
          className: 'swal-title',
          text: "Vous recevrez un email, veuillez consulter votre boîte de réception..",
          icon: "success",
          buttons: { confirm: { text: 'Confirmer inscription', visible: true } },
          dangerMode: false,
        }).then((res) => {
          if (res) {
            this.route.navigateByUrl('auth');
          }
        });


      }
    });




  }

  open(content) {

    this.modal.open(content, { ariaLabelledBy: 'Application' }).result.then((result) => {

    }, (reason) => {

    });


  }
}
