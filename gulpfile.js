'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync');

var src = './app/scss/**/*.+(scss|sass)';
var htmlSrc = './app/**/*.html';
var imgSrc = './app/imgs/*';


const styles = () =>
  gulp
    .src(src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css/'));

const imgs = () =>
  gulp
    .src(imgSrc)
    .pipe(gulp.dest('./build/imgs/'));

const html = () =>
  gulp
    .src(htmlSrc)
    .pipe(gulp.dest('./build'));

const refresh = () => {
  bs.init({
    server: {
      baseDir: './build'
    },
    notify: false
  });

  gulp.watch(src, styles).on('change', bs.reload);
  gulp.watch(htmlSrc, html).on('change', bs.reload);
  gulp.watch(imgSrc, imgs).on('change', bs.reload);
}

const build = gulp.series(gulp.parallel(styles, imgs, html));

const watch = gulp.series(build, refresh);

exports.watch = watch;

exports.styles = styles;

exports.build = build;

exports.default = build;