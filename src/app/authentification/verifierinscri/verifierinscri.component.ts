import { UserService } from '../../teams/selection-admission/User/Services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verifierinscri',
  templateUrl: './verifierinscri.component.html',
  styleUrls: ['./verifierinscri.component.scss']
})
export class VerifierinscriComponent implements OnInit {
  href =[] ;
  email="";

  constructor(private route: Router, private US:UserService) { }

  ngOnInit() {
    this.href = this.route.url.split('/');
    this.href = this.href[2].split('?')
    this.email = this.href[0];



    this.US.activeInscription(this.email).subscribe(
      (response) => {
        console.log("ok")
      },
      (error) => {
        console.log(error)
      }
    );
  }

  click(){
    this.route.navigateByUrl('auth');
  }

}
