import { Component, OnInit } from '@angular/core';
import{AssetService} from './asset.service';
import {Asset} from './asset.model';
import {Router} from'@angular/router';
@Component({
  moduleId: module.id,
  selector: 'asset-form',
  templateUrl: 'asset.template.html'
  
})
export class AssetComponent implements OnInit{

asset:Asset;

constructor(private assetService:AssetService,
private router:Router){}
ngOnInit(){
    this.asset = new Asset();
}
 
  onSubmit() { 

    this.assetService.submitAssetDetails(this.asset).subscribe();

  }
 

}
