import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {UsersComponent} from './users/users.component';
import {AssetComponent} from './asset/asset.component';
import {AssetViewComponent} from './assetView/assetView.component';
import {AccessComponent} from './access/access.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ModalComponent} from './modal/modal.component';

const appRoutes: Routes = [
{
    path:'',
    redirectTo:'welcome',
    pathMatch:'full'

},
{
    path:'login',
    component:LoginComponent

},
{
    path:'users',
    component:UsersComponent

},
{
    path:'asset',
    component:AssetComponent

},
{
    path:'assetview',
    component:AssetViewComponent

},
{
    path:'access',
    component:AccessComponent

},
{
    path:'welcome',
    component:WelcomeComponent

},
{
    path:'registration',
    component:RegistrationComponent

},
{
    path:'dashboard',
    component:DashboardComponent

},
// routing for a future modal form
{
    path:'modal',
    component:ModalComponent

}


];
export const appRouting:ModuleWithProviders = RouterModule.forRoot(appRoutes);