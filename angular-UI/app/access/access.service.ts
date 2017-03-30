import {Http, Response, URLSearchParams} from '@angular/http';
import{Injectable,Inject} from '@angular/core';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Access} from './access.model';

@Injectable()
export class AccessService{
    http:Http;

    constructor(http :Http){
        this.http=http;
    }
    submitAccessDetails(access:Access) : Observable<Access>{
        return this.http.post(`http://localhost:8080/access`,access).map(res => res.json() as Access)
    }
}