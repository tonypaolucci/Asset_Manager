import {Http, Response, URLSearchParams} from '@angular/http';
import{Injectable,Inject} from '@angular/core';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Dashboard} from './dashboard.model';
import {Users} from '../users/users.model'

@Injectable()
export class DashboardService{
    http:Http;


    constructor(http :Http){
        this.http=http;
    }

}