import { Component, OnInit } from '@angular/core';
import{AssetViewService} from './assetView.service';
import {AssetView} from './assetView.model';
import {Asset} from '../asset/asset.model';
import {AssetService} from '../asset/asset.service';
import {Router} from'@angular/router';
import {UsersService} from'../users/users.service';
@Component({
  moduleId: module.id,
  selector: 'assetview',
  templateUrl: 'assetView.template.html',
  styleUrls: ['assetView.css']
  
})
export class AssetViewComponent implements OnInit{

assetView:AssetView;
search:string;

constructor(private assetService:AssetViewService, private usersService:UsersService,
private router:Router){}
ngOnInit(){
    this.assetView = new AssetView();
    //this.asset = new Asset();
    this.search = '';
}
onSubmit() { 
  
    this.assetService.getAssetsByEmail(this.search).subscribe(
    //      data => { this.asset = data 
    //   this.firstName= data.firstName
    //    this.lastName = data.lastName
    //    this.email=data.email;
    //   }
      );
  }

}