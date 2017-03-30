import {Http, Response, URLSearchParams} from '@angular/http';
import{Injectable,Inject} from '@angular/core';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Login} from './login.model';
import {Users} from '../users/users.model'

@Injectable()
export class LoginService{
    http:Http;


    constructor(http :Http){
        this.http=http;
    }
    submitLoginDetails(login:Login) : Observable<Login>{
        return this.http.post(`http://localhost:8080/login`,login).map(res => res.json() as Login)
    }
   
     login(userName:string, pass:string) : Observable<Users>{
          let login = new Login();
          let params:URLSearchParams = new URLSearchParams();
    //let params = {};
        params.set('userName', userName);
        params.set('pass', pass);
    //login.userName = this.userName;
    //login.pass = this.pass;
         
         //params.set('userName', userName);
        return this.http.get(`http://localhost:8080/login`,{search:params}).map(res => res.json() as Users)
    }

}