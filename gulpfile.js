var gulp = require('gulp');
var webpack = require('webpack-stream');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');

gulp.task('static:dev', function() {
  return gulp.src('app/**/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('sass:dev', function() {
  return gulp.src('./app/sass/**.scss')
  .pipe(maps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('build/css'));
});

gulp.task('images:dev', function() {
  return gulp.src('./app/images/**')
  .pipe(gulp.dest('build/images'));
});

gulp.task('fonts:dev', function() {
  return gulp.src('./app/sass/icons/fonts/**')
  .pipe(gulp.dest('build/css/fonts'));
});

gulp.task('zenscroll:dev', function() {
  return gulp.src('./app/js/lib/zenscroll/zenscroll-min.js')
  .pipe(gulp.dest('build'));
});

gulp.task('fullpagejs:dev', function() {
  return gulp.src('./app/js/lib/fullPage/jquery.fullPage.js')
  .pipe(gulp.dest('build'));
});

gulp.task('fullpagecss:dev', function() {
  return gulp.src('./app/js/lib/fullPage/jquery.fullPage.css')
  .pipe(gulp.dest('build'));
});

gulp.task('webpack:dev', function() {
  return gulp.src('app/js/entry.jsx')
  .pipe(webpack({
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2015', 'stage-2']
          }
        }
      ]
    },
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('build/'));
});

gulp.task('build', ['static:dev', 'webpack:dev', 'zenscroll:dev', 'fullpagejs:dev', 'fullpagecss:dev']);
gulp.task('styles', ['sass:dev', 'images:dev', 'fonts:dev']);
gulp.task('default', ['build', 'styles']);
