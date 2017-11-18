var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
gutil.log('stuff happened', 'Really it did', gutil.colors.magenta('123'));
gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/**/*.+(html|njk)')

  .pipe(data(function() {
    return require('./app/data.json')
  }))

  // Renders template with nunjucks
  .pipe(nunjucksRender({
    path: ['app/templates']
  }))

   .pipe(gulp.dest('build'))

   .pipe(browserSync.reload({
     stream: true
   }))
});

gulp.task('styles', function() {
    gulp.src('app/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/assets/css/'))
        .pipe(browserSync.reload({
          stream: true
        }))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('app/assets/scss/**/*.scss',['styles']);
});

//Watch task
gulp.task('watch',['browserSync', 'nunjucks', 'styles','move-assets'],function() {
    gulp.watch('app/assets/scss/**/*.scss',['styles']);
    gulp.watch('app/assets/css/**/*.css',['css']);
    gulp.watch('app/assets/js/**/*.js',['js']);
    gulp.watch('app/assets/fonts/**/*',['fonts']);
    gulp.watch('app/**/**/*.+(html|njk)',['nunjucks']);
});

//movefiles
gulp.task('move-assets', ['css','fonts','js','images','materialize']);

//server sync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'build'
    },
  })
});

//moving fonts
gulp.task('fonts', function() {
  return gulp.src('app/assets/fonts/**/*')
  .pipe(gulp.dest('build/assets/fonts'))
});

//moving css
gulp.task('css', function() {
  return gulp.src('app/assets/css/**/*')
  .pipe(gulp.dest('build/assets/css'))
});

//moving js
gulp.task('js', function() {
  return gulp.src('app/assets/js/**/*')
  .pipe(gulp.dest('build/assets/js'))
});

//moving images
gulp.task('images', function() {
  return gulp.src('app/assets/images/**/*')
  .pipe(gulp.dest('build/assets/images'))
});

gulp.task('materialize', function() {
  return gulp.src('app/assets/materialize/**/*')
  .pipe(gulp.dest('build/assets/materialize'))
});

// 68796P
