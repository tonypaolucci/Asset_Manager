"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var users_service_1 = require("./users/users.service");
var login_service_1 = require("./login/login.service");
var registration_service_1 = require("./registration/registration.service");
var access_service_1 = require("./access/access.service");
var asset_service_1 = require("./asset/asset.service");
var welcome_service_1 = require("./welcome/welcome.service");
var users_component_1 = require("./users/users.component");
var asset_component_1 = require("./asset/asset.component");
var access_component_1 = require("./access/access.component");
var login_component_1 = require("./login/login.component");
var assetView_service_1 = require("./assetView/assetView.service");
var assetView_component_1 = require("./assetView/assetView.component");
var registration_component_1 = require("./registration/registration.component");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./home/home.component");
var welcome_component_1 = require("./welcome/welcome.component");
var dashboard_service_1 = require("./dashboard/dashboard.service");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var dash_component_1 = require("./startbootstrap-sb-admin-gh-pages/dash.component");
var dash_service_1 = require("./startbootstrap-sb-admin-gh-pages/dash.service");
function AppModule(baseUrl) {
    var AppComponentModule = (function () {
        function AppComponentModule() {
        }
        return AppComponentModule;
    }());
    AppComponentModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.appRouting],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, registration_component_1.RegistrationComponent, users_component_1.UsersComponent, access_component_1.AccessComponent, asset_component_1.AssetComponent, welcome_component_1.WelcomeComponent, login_component_1.LoginComponent, dashboard_component_1.DashboardComponent, dash_component_1.DashComponent, assetView_component_1.AssetViewComponent],
            providers: [users_service_1.UsersService, registration_service_1.RegistrationService, asset_service_1.AssetService, access_service_1.AccessService, welcome_service_1.WelcomeService, login_service_1.LoginService, dashboard_service_1.DashboardService, dash_service_1.DashService, assetView_service_1.AssetViewService,
                { provide: 'baseUrl', useValue: baseUrl }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppComponentModule);
    return AppComponentModule;
}
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map