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
var assetView_service_1 = require("./assetView.service");
var assetView_model_1 = require("./assetView.model");
var router_1 = require("@angular/router");
var users_service_1 = require("../users/users.service");
var AssetViewComponent = (function () {
    function AssetViewComponent(assetService, usersService, router) {
        this.assetService = assetService;
        this.usersService = usersService;
        this.router = router;
    }
    AssetViewComponent.prototype.ngOnInit = function () {
        this.assetView = new assetView_model_1.AssetView();
        //this.asset = new Asset();
        this.search = '';
    };
    AssetViewComponent.prototype.onSubmit = function () {
        this.assetService.getAssetsByEmail(this.search).subscribe();
    };
    return AssetViewComponent;
}());
AssetViewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'assetview',
        templateUrl: 'assetView.template.html',
        styleUrls: ['assetView.css']
    }),
    __metadata("design:paramtypes", [assetView_service_1.AssetViewService, users_service_1.UsersService,
        router_1.Router])
], AssetViewComponent);
exports.AssetViewComponent = AssetViewComponent;
//# sourceMappingURL=assetView.component.js.map