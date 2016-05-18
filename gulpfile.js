'use strict';
 
var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');

//SASS task

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
 

//autoprefixer task

gulp.task('autoprefixer', function () {
	return gulp.src('css/styles.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./css'));
});

//live reload
gulp.task('watch', function() {
	
	gulp.watch('./sass/**/*.scss', ['sass']);

});


