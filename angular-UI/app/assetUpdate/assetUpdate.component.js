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
var assetUpdate_service_1 = require("./assetUpdate.service");
var assetUpdate_model_1 = require("./assetUpdate.model");
var asset_model_1 = require("../asset/asset.model");
var router_1 = require("@angular/router");
var asset_service_1 = require("../asset/asset.service");
var modal_component_1 = require("../modal/modal.component");
var AssetUpdateComponent = (function () {
    function AssetUpdateComponent(assetUpdateService, assetService, router) {
        this.assetUpdateService = assetUpdateService;
        this.assetService = assetService;
        this.router = router;
    }
    AssetUpdateComponent.prototype.ngOnInit = function () {
        this.assetUpdate = new assetUpdate_model_1.AssetUpdate();
        this.asset = new asset_model_1.Asset();
        this.search = 0;
    };
    // calls for an asset using its asset number
    AssetUpdateComponent.prototype.onSearch = function () {
        var _this = this;
        this.assetUpdateService.getAssetById(this.search).subscribe(function (data) {
            _this.asset = data;
        });
    };
    // calls for an uodate of the current asset
    AssetUpdateComponent.prototype.onSubmit = function () {
        this.assetUpdateService.submitAssetUpdateDetails(this.asset).subscribe();
    };
    AssetUpdateComponent.prototype.onclick = function (assetNum) {
    };
    return AssetUpdateComponent;
}());
__decorate([
    core_1.ViewChild(modal_component_1.ModalComponent),
    __metadata("design:type", modal_component_1.ModalComponent)
], AssetUpdateComponent.prototype, "modal", void 0);
AssetUpdateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'assetupdate',
        templateUrl: 'assetUpdate.template.html',
        styleUrls: ['assetUpdate.css']
    }),
    __metadata("design:paramtypes", [assetUpdate_service_1.AssetUpdateService, asset_service_1.AssetService,
        router_1.Router])
], AssetUpdateComponent);
exports.AssetUpdateComponent = AssetUpdateComponent;
//# sourceMappingURL=assetUpdate.component.js.map