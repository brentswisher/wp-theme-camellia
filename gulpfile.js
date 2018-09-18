var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('sass/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['sass/**.scss'], ['sass']);
});