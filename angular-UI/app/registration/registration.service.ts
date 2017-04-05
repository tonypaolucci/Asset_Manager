import {Http, Response, URLSearchParams} from '@angular/http';
import{Injectable,Inject} from '@angular/core';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Registration} from './registration.model';

@Injectable()
export class RegistrationService{
    http:Http;

    constructor(http :Http){
        this.http=http;
    }
    submitRegistrationDetails(registration:Registration) : Observable<Registration>{
        return this.http.post(`http://localhost:8080/registration`,registration).map(res => res.json() as Registration)
    }
}