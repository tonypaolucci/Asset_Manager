import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users/users.service';
import {Users} from '../users/users.model';
import {LoginComponent} from '../login/login.component'
// home component is used for displaying navbar
@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.template.html',
  styleUrls: ['jumbotron.css', ]
})
export class HomeComponent implements OnInit{

firstName:string;
lastName:string;
age:string;
telephone:string;
email:string;
login:string;


constructor(private usersService:UsersService){}
ngOnInit(){
    this.firstName;
    this.lastName ;
    this.age='';
    this.telephone='';
    this.email = '';
    this.login = 'Login';
}
 
  onSubmit() { }

}
