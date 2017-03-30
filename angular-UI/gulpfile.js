var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.

gulp.task('browser-sync', function() {
   bs.init({
    server: {
        baseDir: "./",
    },
    proxy: {
        target: "localhost:8080", // can be [virtual host, sub-directory, localhost with port]
        ws: true // enables websockets
    }
});
});

 