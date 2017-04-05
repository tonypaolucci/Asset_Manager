import { Component, OnInit } from '@angular/core';
import{RegistrationService} from './registration.service';
import {Registration} from './registration.model';
import {Users} from '../users/users.model';
import {UsersService} from '../users/users.service';
import {LoginService} from '../login/login.service'
import {Router} from'@angular/router';
@Component({
  moduleId: module.id,
  selector: 'registration-form',
  templateUrl: 'registration.template.html',
  styleUrls: ['./styles.css']
  
})
export class RegistrationComponent implements OnInit{

registration:Registration;
users:Users;

constructor(private registrationService:RegistrationService, private usersService:UsersService, private loginService:LoginService,
private router:Router){

}
ngOnInit(){
    this.users = new Users();
    this.registration = new Registration();
}
 
  onSubmit() { 
// get a user feom the database for login
    this.usersService.submitUsersDetails(this.users).subscribe();
    this.router.navigate(['login'])

  }
  onCancel() {
    this.router.navigate(['welcome'])
  }

}
