import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login-conductor',
  templateUrl: './login-conductor.page.html',
  styleUrls: ['./login-conductor.page.scss'],
})
export class LoginConductorPage implements OnInit {
  public documento: string;
  public password: string;
 
  constructor(private loginService: LoginService,public alertController: AlertController,public router: Router) {    
    this.documento="";
  this.password="";}

  ngOnInit() {
  }
  async onSubmitLogin(){
   // this.router.navigate(['welcome']);
 this.loginService.getData();
     if(this.documento!="" && this.password!=""){
  
      this.loginService.getLogin(this.documento,this.password)
       .subscribe(data => {
      console.log(data);
       }
       ,
     (error) => {
     console.log(error);

       alert("error de red :( ");
     }
       );
     }else{
       
       const alert = await this.alertController.create({
         cssClass: 'my-custom-class',
         header: 'Alert',
         message: 'Complete todos los campos',
         buttons: ['OK']
       });
   
       await alert.present();
     }
   }
}
