
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
// var sourcemaps = require('gulp-sourcemaps');

// var autoprefixer = require('gulp-autoprefixer');
// var minifycss = require('gulp-minify-css');
// var rename = require('gulp-rename');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');



// // Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./sass/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

// Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function () {
//  return gulp.src('./sass/**/*.scss')
//   .pipe(sourcemaps.init())
//   .pipe(sass().on('error', sass.logError))
//   .pipe(sourcemaps.write())
//   .pipe(gulp.dest('css'));
//   .pipe(browserSync.stream());
// });

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);



//
// // ------ whithout sync -------------------------------------------------------------
// var gulp = require('gulp');
// var concat = require('gulp-concat');
// var sass = require('gulp-sass');
//
//
// // Concatenate JS Files
// gulp.task('scripts', function() {
//    return gulp.src('./js/*.js')
//      .pipe(concat('main.js'))
//      .pipe(gulp.dest('bundle'));
// });
//
//
// // Compile sass into CSS
// gulp.task('sass', function() {
//     return gulp.src("./scss/**/*.scss")
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest("bundle"));
// });
//
//
// gulp.task('watch', function() {
//    // Watch .js files
//    gulp.watch('./js/*.js', ['scripts']);
//     // Watch .scss files
//    gulp.watch('./scss/*.scss', ['sass']);
//  });
//
//  // Default Task
//  gulp.task('default', ['scripts', 'sass', 'watch']);
