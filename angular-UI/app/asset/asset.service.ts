import {Http, Response, URLSearchParams} from '@angular/http';
import{Injectable,Inject} from '@angular/core';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Asset} from './asset.model';
// Sends an http post with the entered asset object for new asset 
@Injectable()
export class AssetService{
    http:Http;

    constructor(http :Http){
        this.http=http;
    }
    // calls to save new asset
    submitAssetDetails(asset:Asset) : Observable<Asset>{
        return this.http.post(`http://localhost:8080/asset`,asset).map(res => res.json() as Asset)
    }
}