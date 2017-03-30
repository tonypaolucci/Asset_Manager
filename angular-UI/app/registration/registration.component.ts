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
  templateUrl: 'registration.template.html'
  
})
export class RegistrationComponent implements OnInit{

registration:Registration;
users:Users;
//usersService:UsersService;

constructor(private registrationService:RegistrationService, private usersService:UsersService, private loginService:LoginService,
private router:Router){

}
ngOnInit(){
    this.users = new Users();
    //this.usersService = new UsersService();
    this.registration = new Registration();
}
 
  onSubmit() { 

    this.usersService.submitUsersDetails(this.users).subscribe();
    this.router.navigate(['dashboard'])
    //this.registrationService.submitRegistrationDetails(this.registration).subscribe();

  }
  onCancel() {
    this.router.navigate(['welcome'])
  }

}
