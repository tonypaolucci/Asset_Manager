import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users/users.service';
import {Users} from '../users/users.model';
import {LoginComponent} from '../login/login.component'

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.template.html',
  styleUrls: ['jumbotron.css']
})
export class HomeComponent implements OnInit{

firstName:string;
lastName:string;
age:string;
telephone:string;
email:string;

//userService:UsersService;

constructor(private usersService:UsersService){}
ngOnInit(){
    this.firstName;
    this.lastName ;
    this.age='';
    this.telephone='';
    this.email = '';
    //this.loginComponent.userService.loggedinUser.firstName;
    
    //this.usersService.loggedinUser = new Users();
   //this.usersService.loggedinUser.firstName = '';
   //this.usersService.loggedinUser.lastName = '';
}
 
  onSubmit() { }
  // TODO: Remove this when we're done

}
