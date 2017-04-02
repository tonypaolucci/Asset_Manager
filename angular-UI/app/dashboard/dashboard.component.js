"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var dashboard_service_1 = require("./dashboard.service");
var users_service_1 = require("../users/users.service");
var router_1 = require("@angular/router");
var DashboardComponent = (function () {
    //userService:UsersService;
    function DashboardComponent(dashboardService, usersService, router) {
        this.dashboardService = dashboardService;
        this.usersService = usersService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //this.login = new Login();
        this.userName = '';
        this.pass = '';
        this.errorMessage = '';
        //this.userService = this.usersService;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dashboard',
        templateUrl: 'dashboard.template.html',
        styleUrls: ['dashboard.css']
    }),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService, users_service_1.UsersService,
        router_1.Router])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map