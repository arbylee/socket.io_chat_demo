'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src(__dirname + '/../public/styles/**/*.scss')
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest(__dirname + '/../public/styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch(__dirname + '/../public/styles/**/*.scss', ['sass']);
});
