import  swal  from 'sweetalert';
import { UserService } from '../../teams/selection-admission/User/Services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
mdp=''
confmdp=''
token=''
email;
  constructor(private US:UserService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.email=localStorage.getItem('mail');
    this.router.params.subscribe((val)=>{
      this.token=val.token
    })
  }
  alerts=[]
changermdp(){






  var user={resetLink:this.token, newPassword:this.mdp, email:this.email}

  this.US.ChangerPassword(user).subscribe(
    (response) => {
      //@ts-ignore
      if(response.data=="Your password has been changed"){
        swal('Mot de passe','Votre mot de passe a été changé avec succès','success').then(()=>{
          this.route.navigateByUrl('auth');
        });


      }
    },
    (error) => {
      if(error.error.data=='Incorrect token or it is expired'){
       console.log('token expired')
       swal('Mot de passe','Ce lien est expiré','error').then(()=>{
        this.route.navigateByUrl('auth');
       });

      }                          //Error callback


    }
  );
}

}
