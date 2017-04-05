import { Component, OnInit, ViewChild } from '@angular/core';
import{UserUpdateService} from './userUpdate.service';
import {UserUpdate} from './userUpdate.model';
import {Users} from '../users/users.model';
import {AssetService} from '../asset/asset.service';
import {Router} from'@angular/router';
import {UsersService} from'../users/users.service';
import {ModalComponent} from'../modal/modal.component';
@Component({
  moduleId: module.id,
  selector: 'userupdate',
  templateUrl: 'userUpdate.template.html',
  styleUrls: ['userUpdate.css']
  
})

export class UserUpdateComponent implements OnInit{

userUpdate:UserUpdate;
search:string;
    assetNum:Number;
	manufacturer:string;
	modelNum:string;
	styleCode:string;
	serialNum:string;
	name:string;
	type:string;
	version:string;
  user:Users;

constructor(private userUpdateService:UserUpdateService, private usersService:UsersService,
private router:Router){}
ngOnInit(){
    this.userUpdate = new UserUpdate();
    this.user = new Users();
    this.search = '';
    
}
onSearch() { 
  
    this.userUpdateService.getUserByEmail(this.search).subscribe(
         data => { this.user = data 
      // this.assetNum= data.assetNum
      //  this.manufacturer = data.manufacturer
      //  this.modelNum=data.modelNum
      //  this.styleCode=data.styleCode
      //  this.serialNum=data.serialNum
      //  this.name=data.name
      //  this.type=data.type
      //  this.version=data.version;
      ;}
      );
  }

onSubmit()
{
    this.userUpdateService.submitUserUpdateDetails(this.user).subscribe();
}

onclick(assetNum:Number)
{
  
}
@ViewChild(ModalComponent)
  public readonly modal: ModalComponent;
}