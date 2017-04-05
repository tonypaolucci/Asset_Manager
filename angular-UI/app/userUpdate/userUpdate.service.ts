import {Http, Response, URLSearchParams} from '@angular/http';
import{Injectable,Inject} from '@angular/core';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UserUpdate} from './userUpdate.model';
import {Users} from '../users/users.model';

@Injectable()
export class UserUpdateService{
    http:Http;

    constructor(http :Http){
        this.http=http;
    }
    submitUserUpdateDetails(user:Users) : Observable<UserUpdate>{
        let param = {};
        param['firstName']=user.firstName;
        param['lastName']=user.lastName;
        param['accessLevel']=user.accessLevel;
        param['email']=user.email;
        return this.http.post(`http://localhost:8080/user/id`,param).map(res => res.json() as Users)
    }
     getUserByEmail(email:string) : Observable<Users>{
          let user = new Users();
          let params:URLSearchParams = new URLSearchParams();
    //let params = {};
        params.set('email', email);
    //login.userName = this.userName;
    //login.pass = this.pass;
         
         //params.set('userName', userName);
        return this.http.get(`http://localhost:8080/user`,{search:params}).map(res => res.json() as Users)
    }
}