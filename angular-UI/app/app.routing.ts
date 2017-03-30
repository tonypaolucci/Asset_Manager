import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {UsersComponent} from './users/users.component';
import {AssetComponent} from './asset/asset.component';
import {AccessComponent} from './access/access.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
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

}

];
export const appRouting:ModuleWithProviders = RouterModule.forRoot(appRoutes);