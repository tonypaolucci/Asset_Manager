import { Component } from '@angular/core';

import{UsersService} from './users/users.service';
@Component({
  selector: 'my-app',
  template: '<home></home>'
})

export class AppComponent { 
// access to users servicce for login
  constructor(private usersService:UsersService,
){}
ngOnInit(){
  
    //this.users = new Users();
    //this.usersService.loggedinUser = new Users();
}
}
