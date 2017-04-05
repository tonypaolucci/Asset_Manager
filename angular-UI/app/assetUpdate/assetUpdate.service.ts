import {Http, Response, URLSearchParams} from '@angular/http';
import{Injectable,Inject} from '@angular/core';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AssetUpdate} from './assetUpdate.model';
import {Asset} from '../asset/asset.model';

@Injectable()
export class AssetUpdateService{
    http:Http;

    constructor(http :Http){
        this.http=http;
    }
    // request to post the asset update
    submitAssetUpdateDetails(asset:Asset) : Observable<AssetUpdate>{
        let param = {};
        param['assetNum']=asset.assetNum;
        param['manufacturer']=asset.manufacturer;
        param['modelNum']=asset.modelNum;
        param['styleCode']=asset.styleCode;
        param['serialNum']=asset.serialNum;
        param['datePurchased']=asset.datePurchased;
        param['location']=asset.location;
        param['name']=asset.name;
        param['type']=asset.type;
        param['dateLastServiced']=asset.dateLastServiced;
        param['dateNextService']=asset.dateNextService;
        param['version']=asset.version;
        param['assignedUser']=asset.assignedUser;
        param['notes']=asset.notes;
        return this.http.post(`http://localhost:8080/asset/id`,param).map(res => res.json() as Asset)
    }
     getAssetById(id:Number) : Observable<Asset>{
          let asset = new Asset();
          let params:URLSearchParams = new URLSearchParams();
        params.set('assetNum', id.toString());
        return this.http.get(`http://localhost:8080/asset/search`,{search:params}).map(res => res.json() as Asset)
    }
}