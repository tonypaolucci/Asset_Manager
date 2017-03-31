import { Component, OnInit } from '@angular/core';
import{WelcomeService} from './welcome.service';
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

constructor(private welcomeService:WelcomeService,
private router:Router){}
ngOnInit(){
    this.welcome = new Welcome();
}
 
  onSubmit() { 

    this.welcomeService.submitWelcomeDetails(this.welcome).subscribe();

  }
 

}
