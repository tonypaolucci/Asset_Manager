'use strict';
var fallback = require('connect-history-api-fallback');
var log = require('connect-logger');
var proxy = require('http-proxy-middleware');

var apiProxy = proxy({target:'http://localhost:8080'});

module.exports = {
     
    server:{
        baseDir: './',
    },
    proxy: {
    target:'http://localhost:8080'
}


};

 //proxy: {
       // target: "localhost:8080", // can be [virtual host, sub-directory, localhost with port]
        // ws: true // enables websockets
   // }