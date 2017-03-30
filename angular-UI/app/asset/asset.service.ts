import {Http, Response, URLSearchParams} from '@angular/http';
import{Injectable,Inject} from '@angular/core';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Asset} from './asset.model';

@Injectable()
export class AssetService{
    http:Http;

    constructor(http :Http){
        this.http=http;
    }
    submitAssetDetails(asset:Asset) : Observable<Asset>{
        return this.http.post(`http://localhost:8080/asset`,asset).map(res => res.json() as Asset)
    }
}