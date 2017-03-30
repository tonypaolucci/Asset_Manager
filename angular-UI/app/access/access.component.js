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
var access_service_1 = require("./access.service");
var access_model_1 = require("./access.model");
var router_1 = require("@angular/router");
var AccessComponent = (function () {
    function AccessComponent(accessService, router) {
        this.accessService = accessService;
        this.router = router;
    }
    AccessComponent.prototype.ngOnInit = function () {
        this.access = new access_model_1.Access();
    };
    AccessComponent.prototype.onSubmit = function () {
        this.accessService.submitAccessDetails(this.access).subscribe();
    };
    return AccessComponent;
}());
AccessComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'access-form',
        templateUrl: 'access.template.html'
    }),
    __metadata("design:paramtypes", [access_service_1.AccessService,
        router_1.Router])
], AccessComponent);
exports.AccessComponent = AccessComponent;
//# sourceMappingURL=access.component.js.map