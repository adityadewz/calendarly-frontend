var $ = require('gulp-load-plugins')({ lazy: true })
var gulp = require('gulp');

gulp.task('lessToScss', function() { // used only once
    return gulp.src('temporary/css/**/*.css')
        .pipe($.cssBase64())
        .pipe(gulp.dest('temporary/build'));
});
gulp.task('less', function() {
    return gulp.src('temporary/less/**/*.less')
        .pipe($.less())
        .pipe(gulp.dest('temporary/build/less-build'));
});