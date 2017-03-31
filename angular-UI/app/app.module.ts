import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import { AppComponent }   from './app.component';
import { UsersService }   from './users/users.service';
import { LoginService }   from './login/login.service';

import { RegistrationService }   from './registration/registration.service';
import { AccessService }   from './access/access.service';
import { AssetService }   from './asset/asset.service';
import { WelcomeService }   from './welcome/welcome.service';
import { UsersComponent }   from './users/users.component';
import {AssetComponent }   from './asset/asset.component';
import { AccessComponent }   from './access/access.component';
import {LoginComponent }   from './login/login.component';

import { RegistrationComponent }   from './registration/registration.component';
import {appRouting} from './app.routing';
import {HomeComponent} from './home/home.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { DashboardService }   from './dashboard/dashboard.service';
import { DashboardComponent }   from './dashboard/dashboard.component';
import {DashComponent} from './startbootstrap-sb-admin-gh-pages/dash.component';
import {DashService} from './startbootstrap-sb-admin-gh-pages/dash.service';

export function AppModule(baseUrl:string){ 

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,appRouting ],
  declarations: [ AppComponent,HomeComponent, RegistrationComponent, UsersComponent, AccessComponent, AssetComponent, WelcomeComponent, LoginComponent, DashboardComponent,DashComponent ],
  providers: [UsersService,RegistrationService,AssetService,AccessService,WelcomeService,LoginService,DashboardService,DashService,
   {provide :'baseUrl', useValue:baseUrl} 
  ],
  bootstrap:    [ AppComponent ]
})
  class AppComponentModule { } return AppComponentModule;
}
