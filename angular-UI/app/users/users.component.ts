import { Component, OnInit } from '@angular/core';
import{UsersService} from './users.service';
import {Users} from './users.model';
import {Router} from'@angular/router';
@Component({
  moduleId: module.id,
  selector: 'users-form',
  templateUrl: 'users.template.html'
  
})
export class UsersComponent implements OnInit{

users:Users;
userName:string;
firstName:string;
 lastName:string;
 email:string;
 accessLevel:string;
 pass:string;

constructor(private usersService:UsersService,
private router:Router){}
ngOnInit(){
  this.userName = '';
 this.firstName = '';
 this.lastName = '';
 this.email = '';
 this.accessLevel = '';
 this.pass = '';
    //this.users = new Users();
    //this.usersService.loggedinUser = new Users();
}
 
  onSubmit() { 

    this.usersService.submitUsersDetails(this.users).subscribe();

  }
 

}
