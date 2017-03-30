"use strict";
var users_model_1 = require("../users/users.model");
//import {Login} from '../login/login.model'
var Registration = (function () {
    function Registration() {
        this.users = new users_model_1.Users;
        //login:Login = new Login;   
        //  userName:string;
        //  pass:string;
        //  firstName:string;
        //  lastName:string;
        //  email:string;
        //  accessLevel:string;
    }
    return Registration;
}());
exports.Registration = Registration;
//# sourceMappingURL=registration.model.js.map