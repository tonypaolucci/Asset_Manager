import {Http, Response, URLSearchParams} from '@angular/http';
import{Injectable,Inject} from '@angular/core';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AssetView} from './assetView.model';
import {Asset} from '../asset/asset.model';

@Injectable()
export class AssetViewService{
    http:Http;

    constructor(http :Http){
        this.http=http;
    }
    submitAssetViewDetails(assetView:AssetView) : Observable<AssetView>{
        return this.http.post(`http://localhost:8080/asset`,assetView).map(res => res.json() as AssetView)
    }
     getAssetsByEmail(email:string) : Observable<Asset>{
          let asset = new Asset();
          let params:URLSearchParams = new URLSearchParams();
    //let params = {};
        params.set('email', email);
    //login.userName = this.userName;
    //login.pass = this.pass;
         
         //params.set('userName', userName);
        return this.http.get(`http://localhost:8080/assigned_asset`,{search:params}).map(res => res.json() as Asset)
    }
}