"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var registration_component_1 = require("./registration/registration.component");
var users_component_1 = require("./users/users.component");
var asset_component_1 = require("./asset/asset.component");
var access_component_1 = require("./access/access.component");
var welcome_component_1 = require("./welcome/welcome.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var appRoutes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent
    },
    {
        path: 'asset',
        component: asset_component_1.AssetComponent
    },
    {
        path: 'access',
        component: access_component_1.AccessComponent
    },
    {
        path: 'welcome',
        component: welcome_component_1.WelcomeComponent
    },
    {
        path: 'registration',
        component: registration_component_1.RegistrationComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map