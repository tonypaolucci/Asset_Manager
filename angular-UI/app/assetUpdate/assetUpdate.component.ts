import { Component, OnInit, ViewChild } from '@angular/core';
import{AssetUpdateService} from './assetUpdate.service';
import {AssetUpdate} from './assetUpdate.model';
import {Asset} from '../asset/asset.model';
import {Router} from'@angular/router';
import {AssetService} from'../asset/asset.service';
import {ModalComponent} from'../modal/modal.component';
@Component({
  moduleId: module.id,
  selector: 'assetupdate',
  templateUrl: 'assetUpdate.template.html',
  styleUrls: ['assetUpdate.css']
  
})

export class AssetUpdateComponent implements OnInit{

assetUpdate:AssetUpdate;
search:Number;
    assetNum:Number;
	manufacturer:string;
	modelNum:string;
	styleCode:string;
	serialNum:string;
	name:string;
	type:string;
	version:string;
  asset:Asset;

constructor(private assetUpdateService:AssetUpdateService, private assetService:AssetService,
private router:Router){}
ngOnInit(){
    this.assetUpdate = new AssetUpdate();
    this.asset = new Asset();
    this.search = 0;
    
}
// calls for an asset using its asset number
onSearch() { 
  
    this.assetUpdateService.getAssetById(this.search).subscribe(
         data => { this.asset = data 
      ;}
      );
  }
// calls for an uodate of the current asset
onSubmit()
{
    this.assetUpdateService.submitAssetUpdateDetails(this.asset).subscribe();
}

onclick(assetNum:Number)
{
  
}
@ViewChild(ModalComponent)
  public readonly modal: ModalComponent;
}