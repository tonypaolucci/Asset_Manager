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
var asset_model_1 = require("../asset/asset.model");
var router_1 = require("@angular/router");
var users_service_1 = require("../users/users.service");
var modal_component_1 = require("../modal/modal.component");
var AssetViewComponent = (function () {
    function AssetViewComponent(assetService, usersService, router) {
        this.assetService = assetService;
        this.usersService = usersService;
        this.router = router;
    }
    AssetViewComponent.prototype.ngOnInit = function () {
        this.assetView = new assetView_model_1.AssetView();
        this.asset = new asset_model_1.Asset();
        this.modalAsset = new asset_model_1.Asset();
        this.search = '';
    };
    AssetViewComponent.prototype.onSubmit = function () {
        var _this = this;
        // get an array of assets to show in a table
        this.assetService.getAssetsByEmail(this.search).subscribe(function (data) {
            _this.assets = data;
        });
    };
    AssetViewComponent.prototype.onclick = function (assetNum) {
    };
    return AssetViewComponent;
}());
__decorate([
    core_1.ViewChild(modal_component_1.ModalComponent),
    __metadata("design:type", modal_component_1.ModalComponent)
], AssetViewComponent.prototype, "modal", void 0);
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