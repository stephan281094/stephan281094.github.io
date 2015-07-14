var gulp      = require('gulp');
var sass      = require('gulp-sass');
var concat    = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var minifyjs  = require('gulp-uglify');
var rename    = require('gulp-rename');

var paths = {
    scss: 'client/stylesheets/**/*.scss',
    js: 'client/javascripts/**/*.js'
};

gulp.task('scss', function() {
    gulp.src(paths.scss)
        .pipe(sass({errLogToConsole: true}))
        .pipe(concat('complete.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('build/'))
});

gulp.task('js', function() {
    gulp.src(paths.js)
        .pipe(concat('complete.min.js'))
        .pipe(minifyjs())
        .pipe(gulp.dest('build/'))
});

gulp.task('default', ['scss', 'js'], function() {
    gulp.watch(paths.scss, ['scss']);
    gulp.watch(paths.js, ['js']);
});
