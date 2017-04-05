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
var asset_model_1 = require("../asset/asset.model");
var AssetUpdateService = (function () {
    function AssetUpdateService(http) {
        this.http = http;
    }
    // request to post the asset update
    AssetUpdateService.prototype.submitAssetUpdateDetails = function (asset) {
        var param = {};
        param['assetNum'] = asset.assetNum;
        param['manufacturer'] = asset.manufacturer;
        param['modelNum'] = asset.modelNum;
        param['styleCode'] = asset.styleCode;
        param['serialNum'] = asset.serialNum;
        param['datePurchased'] = asset.datePurchased;
        param['location'] = asset.location;
        param['name'] = asset.name;
        param['type'] = asset.type;
        param['dateLastServiced'] = asset.dateLastServiced;
        param['dateNextService'] = asset.dateNextService;
        param['version'] = asset.version;
        param['assignedUser'] = asset.assignedUser;
        param['notes'] = asset.notes;
        return this.http.post("http://localhost:8080/asset/id", param).map(function (res) { return res.json(); });
    };
    AssetUpdateService.prototype.getAssetById = function (id) {
        var asset = new asset_model_1.Asset();
        var params = new http_1.URLSearchParams();
        params.set('assetNum', id.toString());
        return this.http.get("http://localhost:8080/asset/search", { search: params }).map(function (res) { return res.json(); });
    };
    return AssetUpdateService;
}());
AssetUpdateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AssetUpdateService);
exports.AssetUpdateService = AssetUpdateService;
//# sourceMappingURL=assetUpdate.service.js.map