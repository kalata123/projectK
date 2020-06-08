'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var src = './app/scss/**/*.+(scss|sass)'

const styles = () =>
  gulp
    .src(src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css/'));

const build = gulp.series(
  gulp.parallel(styles)
);

exports.build = build;
exports.default = build;