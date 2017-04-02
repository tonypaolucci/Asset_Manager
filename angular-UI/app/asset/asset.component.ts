import { Component, OnInit } from '@angular/core';
import{AssetService} from './asset.service';
import {Asset} from './asset.model';
import {Router} from'@angular/router';
@Component({
  moduleId: module.id,
  selector: 'asset-form',
  templateUrl: 'asset.template.html',
  styleUrls: ['asset.css']
  
})
export class AssetComponent implements OnInit{

asset:Asset;
success:string;

constructor(private assetService:AssetService,
private router:Router){}
ngOnInit(){
    this.asset = new Asset();
}
 
  onSubmit() { 

    this.assetService.submitAssetDetails(this.asset).subscribe();
    this.success = 'SUCCESS!';
    this.asset = new Asset();
  }
 

}
