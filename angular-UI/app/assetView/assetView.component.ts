import { Component, OnInit, ViewChild } from '@angular/core';
import{AssetViewService} from './assetView.service';
import {AssetView} from './assetView.model';
import {Asset} from '../asset/asset.model';
import {AssetService} from '../asset/asset.service';
import {Router} from'@angular/router';
import {UsersService} from'../users/users.service';
import {ModalComponent} from'../modal/modal.component';
@Component({
  moduleId: module.id,
  selector: 'assetview',
  templateUrl: 'assetView.template.html',
  styleUrls: ['assetView.css']
  
})

export class AssetViewComponent implements OnInit{

assetView:AssetView;
search:string;
    assetNum:Number;
	manufacturer:string;
	modelNum:string;
	styleCode:string;
	serialNum:string;
	name:string;
	type:string;
	version:string;
  asset:Asset;
  assets:Asset[];
  modalAsset:Asset;

constructor(private assetService:AssetViewService, private usersService:UsersService,
private router:Router){}
ngOnInit(){
    this.assetView = new AssetView();
    this.asset = new Asset();
    this.modalAsset = new Asset();
    this.search = '';
    
}
onSubmit() { 
  // get an array of assets to show in a table
    this.assetService.getAssetsByEmail(this.search).subscribe(
         data => { this.assets = data 
      ;}
      );
  }

onclick(assetNum:Number)
{
  
}

@ViewChild(ModalComponent)
  public readonly modal: ModalComponent;
}