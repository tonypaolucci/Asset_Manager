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
var registration_service_1 = require("./registration.service");
var registration_model_1 = require("./registration.model");
var users_model_1 = require("../users/users.model");
var users_service_1 = require("../users/users.service");
var login_service_1 = require("../login/login.service");
var router_1 = require("@angular/router");
var RegistrationComponent = (function () {
    //usersService:UsersService;
    function RegistrationComponent(registrationService, usersService, loginService, router) {
        this.registrationService = registrationService;
        this.usersService = usersService;
        this.loginService = loginService;
        this.router = router;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.users = new users_model_1.Users();
        //this.usersService = new UsersService();
        this.registration = new registration_model_1.Registration();
    };
    RegistrationComponent.prototype.onSubmit = function () {
        this.usersService.submitUsersDetails(this.users).subscribe();
        this.router.navigate(['dashboard']);
        //this.registrationService.submitRegistrationDetails(this.registration).subscribe();
    };
    RegistrationComponent.prototype.onCancel = function () {
        this.router.navigate(['welcome']);
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'registration-form',
        templateUrl: 'registration.template.html',
        styleUrls: ['/css']
    }),
    __metadata("design:paramtypes", [registration_service_1.RegistrationService, users_service_1.UsersService, login_service_1.LoginService,
        router_1.Router])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map