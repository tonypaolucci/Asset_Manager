import { Component, OnInit } from '@angular/core';
import{WelcomeService} from './welcome.service';
import{UsersService} from '../users/users.service';
import {Welcome} from './welcome.model';
import {Router} from'@angular/router';
@Component({
  moduleId: module.id,
  selector: 'welcome',
  templateUrl: 'welcome.template.html',
  styleUrls: ['./welcome.css']
  
})
export class WelcomeComponent implements OnInit{

welcome:Welcome;

constructor(private welcomeService:WelcomeService, private usersService:UsersService,
private router:Router){}
ngOnInit(){
    this.welcome = new Welcome();
    this.usersService.loggedinUser = null;
}
 
  onSubmit() { 

    this.welcomeService.submitWelcomeDetails(this.welcome).subscribe();

  }
 

}
