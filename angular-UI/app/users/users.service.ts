import {Http, Response, URLSearchParams} from '@angular/http';
import{Injectable,Inject} from '@angular/core';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Users} from './users.model';

@Injectable()
export class UsersService{
    http:Http;
    loggedinUser:Users;
    constructor(http :Http){
        this.http=http;
    }
    submitUsersDetails(users:Users) : Observable<Users>{
        return this.http.post(`http://localhost:8080/users`,users).map(res => res.json() as Users)
    }
    getUserName(userName:string) : Observable<Users>{
         let user = new Users();
         //let login = new Login();
          let params:URLSearchParams = new URLSearchParams();
    //let params = {};
        params.set('userName', userName);
        //params.set('pass', pass);
        return this.http.get(`http://localhost:8080/login`,{search:params}).map(res => res.json() as Users)
    }
}