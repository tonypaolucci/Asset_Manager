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
var login_service_1 = require("./login.service");
var users_service_1 = require("../users/users.service");
var login_model_1 = require("./login.model");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    //userService:UsersService;
    function LoginComponent(loginService, usersService, router) {
        this.loginService = loginService;
        this.usersService = usersService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.login = new login_model_1.Login();
        this.userName = '';
        this.pass = '';
        this.errorMessage = '';
        //this.userService = this.usersService;
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var login = new login_model_1.Login();
        login.userName = this.userName;
        login.pass = this.pass;
        // this.loginService.submitLoginDetails(this.login).subscribe();
        this.loginService.login(login.userName, login.pass).subscribe(function (data) {
            _this.usersService.loggedinUser = data;
            console.log(data.firstName);
            console.log(_this.usersService.loggedinUser.firstName);
            _this.router.navigate(['dash']);
        }, 
        //this.router.navigate(['welcome'])},
        function (error) { _this.errorMessage = 'Your user name or password did not match our records.'; });
    };
    LoginComponent.prototype.onCancel = function () {
        this.router.navigate(['welcome']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login-form',
        templateUrl: 'login.template.html'
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, users_service_1.UsersService,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map