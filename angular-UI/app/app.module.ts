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
import { AssetViewService }   from './assetView/assetView.service';
import {AssetViewComponent }   from './assetView/assetView.component';
import { UserUpdateService }   from './userUpdate/userUpdate.service';
import {UserUpdateComponent }   from './userUpdate/userUpdate.component';
import { AssetUpdateService }   from './assetUpdate/assetUpdate.service';
import {AssetUpdateComponent }   from './assetUpdate/assetUpdate.component';

import { RegistrationComponent }   from './registration/registration.component';
import {appRouting} from './app.routing';
import {HomeComponent} from './home/home.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { DashboardService }   from './dashboard/dashboard.service';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ModalComponent }   from './modal/modal.component';

export function AppModule(baseUrl:string){ 

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,appRouting ],
  declarations: [ AppComponent,HomeComponent, RegistrationComponent, UsersComponent, AccessComponent, AssetComponent, WelcomeComponent, LoginComponent, DashboardComponent,AssetViewComponent,ModalComponent,UserUpdateComponent,AssetUpdateComponent ],
  providers: [UsersService,RegistrationService,AssetService,AccessService,WelcomeService,LoginService,DashboardService,AssetViewService,UserUpdateService,AssetUpdateService,
   {provide :'baseUrl', useValue:baseUrl} 
  ],
  bootstrap:    [ AppComponent ]
})
  class AppComponentModule { } return AppComponentModule;
}
