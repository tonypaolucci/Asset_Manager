"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var registration_component_1 = require("./registration/registration.component");
var users_component_1 = require("./users/users.component");
var asset_component_1 = require("./asset/asset.component");
var assetView_component_1 = require("./assetView/assetView.component");
var access_component_1 = require("./access/access.component");
var welcome_component_1 = require("./welcome/welcome.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var modal_component_1 = require("./modal/modal.component");
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
        path: 'assetview',
        component: assetView_component_1.AssetViewComponent
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
    },
    // routing for a future modal form
    {
        path: 'modal',
        component: modal_component_1.ModalComponent
    }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map