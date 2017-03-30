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
var RegistrationService = (function () {
    function RegistrationService(http) {
        this.http = http;
        // this.baseUrl=baseUrl;
        // this.countStudentEndPoint='/countStudent';
        // this.findStudentEndPoint ='/findStudentById';
        // this.findStudentNumberEndPoint = '/findStudentNumberById';
        // this.submitStudentDetailsEndPoint='/submitStudentDetails';
    }
    RegistrationService.prototype.submitRegistrationDetails = function (registration) {
        return this.http.post("http://localhost:8080/registration", registration).map(function (res) { return res.json(); });
    };
    return RegistrationService;
}());
RegistrationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RegistrationService);
exports.RegistrationService = RegistrationService;
//# sourceMappingURL=registration.service.js.map