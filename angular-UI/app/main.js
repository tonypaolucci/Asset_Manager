"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
function main(baseUrl) {
    platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_module_1.AppModule(baseUrl))
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
//# sourceMappingURL=main.js.map