import { Component, OnInit } from '@angular/core';
import{DashboardService} from './dashboard.service';
import{UsersService} from '../users/users.service'
import {Dashboard} from './dashboard.model';
import {Router} from'@angular/router';
@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.template.html',
  styleUrls: ['dashboard.css']
  
})  

export class DashboardComponent implements OnInit{

userName:string;
pass:string;
errorMessage:string;

constructor(private dashboardService:DashboardService, private usersService:UsersService,
private router:Router){}
ngOnInit(){
    this.userName = '';
    this.pass = '';
    this.errorMessage = '';
}}