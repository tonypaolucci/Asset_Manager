import {Http, Response, URLSearchParams} from '@angular/http';
import{Injectable,Inject} from '@angular/core';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Welcome} from './welcome.model';

@Injectable()
export class WelcomeService{
    http:Http;

    constructor(http :Http){
        this.http=http;
    }
    submitWelcomeDetails(welcome:Welcome) : Observable<Welcome>{
        return this.http.post(`http://localhost:8080/welcome`,welcome).map(res => res.json() as Welcome)
    }
}