import { Component, OnInit } from '@angular/core';
import{DashboardService} from './dashboard.service';
import{UsersService} from '../users/users.service'
import {Dashboard} from './dashboard.model';
import {Router} from'@angular/router';
@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.template.html'
  
})  

export class DashboardComponent implements OnInit{

//login:Login;
userName:string;
pass:string;
errorMessage:string;
//userService:UsersService;

constructor(private dashboardService:DashboardService, private usersService:UsersService,
private router:Router){}
ngOnInit(){
    //this.login = new Login();
    this.userName = '';
    this.pass = '';
    this.errorMessage = '';
    //this.userService = this.usersService;
}}