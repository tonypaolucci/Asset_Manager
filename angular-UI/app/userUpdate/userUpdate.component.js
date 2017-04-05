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
var userUpdate_service_1 = require("./userUpdate.service");
var userUpdate_model_1 = require("./userUpdate.model");
var users_model_1 = require("../users/users.model");
var router_1 = require("@angular/router");
var users_service_1 = require("../users/users.service");
var modal_component_1 = require("../modal/modal.component");
var UserUpdateComponent = (function () {
    function UserUpdateComponent(userUpdateService, usersService, router) {
        this.userUpdateService = userUpdateService;
        this.usersService = usersService;
        this.router = router;
    }
    UserUpdateComponent.prototype.ngOnInit = function () {
        this.userUpdate = new userUpdate_model_1.UserUpdate();
        this.user = new users_model_1.Users();
        this.search = '';
    };
    UserUpdateComponent.prototype.onSearch = function () {
        var _this = this;
        this.userUpdateService.getUserByEmail(this.search).subscribe(function (data) {
            _this.user = data;
        });
    };
    UserUpdateComponent.prototype.onSubmit = function () {
        this.userUpdateService.submitUserUpdateDetails(this.user).subscribe();
    };
    UserUpdateComponent.prototype.onclick = function (assetNum) {
    };
    return UserUpdateComponent;
}());
__decorate([
    core_1.ViewChild(modal_component_1.ModalComponent),
    __metadata("design:type", modal_component_1.ModalComponent)
], UserUpdateComponent.prototype, "modal", void 0);
UserUpdateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'userupdate',
        templateUrl: 'userUpdate.template.html',
        styleUrls: ['userUpdate.css']
    }),
    __metadata("design:paramtypes", [userUpdate_service_1.UserUpdateService, users_service_1.UsersService,
        router_1.Router])
], UserUpdateComponent);
exports.UserUpdateComponent = UserUpdateComponent;
//# sourceMappingURL=userUpdate.component.js.map