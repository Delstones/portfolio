'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	//uglify = require('gulp-uglify'),
	cleanCSS = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer');

//SASS task

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
});
 
//autoprefixer task

// gulp.task('autoprefixer', function () {
// 	return gulp.src('css/styles.css')
// 		.pipe(autoprefixer({
// 			browsers: ['last 2 versions'],
// 			cascade: false
// 		}))
// 		.pipe(gulp.dest('./css'));
// });

//live reload
gulp.task('watch', function() {
	
	gulp.watch('./src/sass/**/*.scss', ['sass']);

});

// gulp.task('compress', function() {
//   return gulp.src('sass/styles.scss')
//     .pipe(uglify())
//     .pipe(gulp.dest('dist'));
// });
 
 
// gulp.task('minify-css', function() {
//     return gulp.src('./styles/**/*.css')
        
//         .pipe(gulp.dest('dist'));
//     });






