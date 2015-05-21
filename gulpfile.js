var gulp      = require('gulp');
var less      = require('gulp-less');
var minify    = require('gulp-minify-css');
var uglify    = require('gulp-uglify');
var rename    = require('gulp-rename');
var filesize  = require('gulp-filesize');

gulp.task('default', ['less', 'js']);

gulp.task('less', function () {
  return gulp.src('./assets/less/**/*.less')
    .pipe(less())
    .pipe(minify())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(filesize())
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('js', function() {
  return gulp.src(['./assets/js/**/*.js', '!./assets/js/**/*.min.js'])
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('./assets/js'));
});

gulp.task('watch', function() {
  gulp.watch('./assets/less/**/*.less', ['less']);
  gulp.watch(['./assets/js/**/*.js', '!./assets/js/**/*.min.js'], ['js']);
});