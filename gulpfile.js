// File: Gulpfile.js
'use strict';

var gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    stylus    = require('gulp-stylus'),
    nib       = require('nib'),
    inject    = require('gulp-inject'),
    wiredep   = require('wiredep').stream,
    gulpif    = require('gulp-if'),
    minifyCss = require('gulp-minify-css'),
    useref    = require('gulp-useref'),
    uglify    = require('gulp-uglify'),
    uncss     = require('gulp-uncss'),
    using = require('gulp-using'),
    historyApiFallback = require('connect-history-api-fallback'),
    runSequence = require("run-sequence"),
    deploy = require("gulp-gh-pages"),
    del = require('del'),
    open = require('gulp-open');
    
var exec = require('child_process').exec;

gulp.task('clean', function () {
    return gulp.src('output', {read:false})
        .pipe(clean());
});

gulp.task('clean', function (cb) {
  del([
    'output/**/*'
  ], cb);
});

gulp.task('compile', function (errorHandler) {
  exec('pelican ./content', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    errorHandler(err);
  }).on('error', errorHandler);
})

// Servidor web de desarrollo
gulp.task('connect', function() {
  connect.server({
    root: 'output',
    hostname: '0.0.0.0',
    port: 8080,
    livereload: true
  });
});

gulp.task("open", function(){
  var options = {
    url: "http://localhost:8080"
  };
  gulp.src("output/index.html")
  .pipe(open("", options));
});

// generate website to 'dist' folder and then open site in browser
gulp.task('build', function(callback) {
    runSequence('clean', 'compile', 'connect', 'open');
});
 

gulp.task('change', ['compile'], function() {
  gulp.src(['./content/**/*.md', './content/**/*.rst', './content/**/*.ipynb'])
    .pipe(connect.reload());
});

gulp.task('configure', ['compile'], function() {
  gulp.src('pelicanconf.py')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./content/**/*.md', './content/**/*.rst', './content/**/*.ipynb'], ['change']);
  gulp.watch('pelicanconf.py', ['change']);
});

gulp.task('default', function(callback) {
    runSequence('clean', 'compile', 'connect', 'open', 'watch');
});

var options = {
    remoteUrl: "https://github.com/arstream/arstream.github.io.git",
    branch: "master"
    };

gulp.task('deploy', function () {
    gulp.src("output/**/*.*")
        .pipe(deploy(options));
});

// Handle the error
function errorHandler (error) {
  gutil.log( gutil.colors.green( error.message ) );
  this.emit( 'end' );
}