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
var users_service_1 = require("../users/users.service");
var HomeComponent = (function () {
    //userService:UsersService;
    function HomeComponent(usersService) {
        this.usersService = usersService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.firstName;
        this.lastName;
        this.age = '';
        this.telephone = '';
        this.email = '';
        //this.loginComponent.userService.loggedinUser.firstName;
        //this.usersService.loggedinUser = new Users();
        //this.usersService.loggedinUser.firstName = '';
        //this.usersService.loggedinUser.lastName = '';
    };
    HomeComponent.prototype.onSubmit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        templateUrl: 'home.template.html',
        styleUrls: ['jumbotron.css']
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map