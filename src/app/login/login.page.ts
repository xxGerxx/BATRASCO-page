import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  username: string = '';
  password: string = '';

  constructor(private navController: NavController, private alertController: AlertController) {}

  signinButton() {
    if (this.username === 'asdfgerlie' && this.password === '123456') {
      this.navController.navigateForward('/location');
    } else {
      this.username = ''; // Clear the username input field
      this.password = ''; // Clear the password input field
  
      this.alertController.create({
        header: 'Login Failed',
        message: 'Invalid username or password',
        buttons: ['OK']
      }).then(alert => {
        alert.present();
      });
    }
  }
  
  // SigninButton() {
  //   // (this.email && this.pass) ? (this.navController.navigateForward("/home")) :  ;
  // }
  // ngOnInit() {
  // }

}
