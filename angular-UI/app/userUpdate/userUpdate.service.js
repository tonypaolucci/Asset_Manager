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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var users_model_1 = require("../users/users.model");
var UserUpdateService = (function () {
    function UserUpdateService(http) {
        this.http = http;
    }
    UserUpdateService.prototype.submitUserUpdateDetails = function (user) {
        var param = {};
        param['firstName'] = user.firstName;
        param['lastName'] = user.lastName;
        param['accessLevel'] = user.accessLevel;
        param['email'] = user.email;
        return this.http.post("http://localhost:8080/user/id", param).map(function (res) { return res.json(); });
    };
    UserUpdateService.prototype.getUserByEmail = function (email) {
        var user = new users_model_1.Users();
        var params = new http_1.URLSearchParams();
        //let params = {};
        params.set('email', email);
        //login.userName = this.userName;
        //login.pass = this.pass;
        //params.set('userName', userName);
        return this.http.get("http://localhost:8080/user", { search: params }).map(function (res) { return res.json(); });
    };
    return UserUpdateService;
}());
UserUpdateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserUpdateService);
exports.UserUpdateService = UserUpdateService;
//# sourceMappingURL=userUpdate.service.js.map