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
var asset_service_1 = require("./asset.service");
var asset_model_1 = require("./asset.model");
var router_1 = require("@angular/router");
var AssetComponent = (function () {
    function AssetComponent(assetService, router) {
        this.assetService = assetService;
        this.router = router;
    }
    AssetComponent.prototype.ngOnInit = function () {
        this.asset = new asset_model_1.Asset();
    };
    //  method call to the service
    AssetComponent.prototype.onSubmit = function () {
        this.assetService.submitAssetDetails(this.asset).subscribe();
        this.success = 'SUCCESS!';
        this.asset = new asset_model_1.Asset();
    };
    return AssetComponent;
}());
AssetComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'asset-form',
        templateUrl: 'asset.template.html',
        styleUrls: ['asset.css']
    }),
    __metadata("design:paramtypes", [asset_service_1.AssetService,
        router_1.Router])
], AssetComponent);
exports.AssetComponent = AssetComponent;
//# sourceMappingURL=asset.component.js.map