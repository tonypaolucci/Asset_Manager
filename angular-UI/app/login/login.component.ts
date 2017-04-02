import { Component, OnInit } from '@angular/core';
import{LoginService} from './login.service';
import{UsersService} from '../users/users.service';
import {Login} from './login.model';
import {Router} from'@angular/router';
@Component({
  moduleId: module.id,
  selector: 'login-form',
  templateUrl: 'login.template.html'
  
})
export class LoginComponent implements OnInit{

login:Login;
userName:string;
pass:string;
errorMessage:string;
//userService:UsersService;

constructor(private loginService:LoginService, private usersService:UsersService,
private router:Router){}
ngOnInit(){
    this.login = new Login();
    this.userName = '';
    this.pass = '';
    this.errorMessage = '';
    //this.userService = this.usersService;
}
 
  onSubmit() { 
     let login:Login = new Login();
    login.userName =this.userName;
    login.pass=this.pass;
    // this.loginService.submitLoginDetails(this.login).subscribe();
    this.loginService.login(login.userName, login.pass).subscribe(
      data => {
        this.usersService.loggedinUser = data;
        console.log(data.firstName);
        console.log(this.usersService.loggedinUser.firstName);
        this.router.navigate(['dashboard']) 
      
      
      }, 
        //this.router.navigate(['welcome'])},
        error => {this.errorMessage = 'Your user name or password did not match our records.'});
      

  }
  onCancel() {
    this.router.navigate(['welcome'])
  }

}
