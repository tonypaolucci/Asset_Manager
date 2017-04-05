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
var welcome_service_1 = require("./welcome.service");
var users_service_1 = require("../users/users.service");
var welcome_model_1 = require("./welcome.model");
var router_1 = require("@angular/router");
var WelcomeComponent = (function () {
    function WelcomeComponent(welcomeService, usersService, router) {
        this.welcomeService = welcomeService;
        this.usersService = usersService;
        this.router = router;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.welcome = new welcome_model_1.Welcome();
        this.usersService.loggedinUser = null;
    };
    WelcomeComponent.prototype.onSubmit = function () {
        this.welcomeService.submitWelcomeDetails(this.welcome).subscribe();
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'welcome',
        templateUrl: 'welcome.template.html',
        styleUrls: ['./welcome.css']
    }),
    __metadata("design:paramtypes", [welcome_service_1.WelcomeService, users_service_1.UsersService,
        router_1.Router])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map