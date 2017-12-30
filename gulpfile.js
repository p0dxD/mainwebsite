var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
const babelify = require('babelify')
var data = require('gulp-data');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var php  = require('gulp-connect-php');
const babel = require('gulp-babel');
var browserSync = require('browser-sync');
gutil.log('stuff happened', 'Really it did', gutil.colors.magenta('123'));


var defaults = {
  path: '.',
  ext: '.php',
  data: {},
  inheritExtension: false,
  envOptions: {
    watch: false
  },
  manageEnv: null,
  loaders: null
};

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/**/*.+(html|njk)')

  .pipe(data(function() {
    return require('./app/data.json')
  }))

  // Renders template with nunjucks
  .pipe(nunjucksRender({
    path: ['app/templates'],
    ext: '.php'
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
gulp.task('watch',['browserSync','nunjucks', 'styles','move-assets'],function() {
    gulp.watch('app/assets/scss/**/*.scss',['styles']);
    gulp.watch('app/assets/css/**/*.css',['css']);
    gulp.watch('app/assets/js/**/*.js',['js']);
    gulp.watch('app/assets/json/**/*.json',['json']);
    gulp.watch('app/assets/fonts/**/*',['fonts']);
    gulp.watch('app/**/**/*.+(html|njk)',['nunjucks']);
    gulp.watch('app/php/**/*',['phpfiles']);
});

//movefiles
gulp.task('move-assets', ['css','fonts','js','json','images','phpfiles']);

//server sync
gulp.task('browserSync',['php'], function() {
    browserSync({
        proxy: '127.0.0.1:8010',
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('php', function() {
    php.server({ base: 'build', port: 8010, keepalive: true});
});

//moving fonts
gulp.task('fonts', function() {
  return gulp.src('app/assets/fonts/**/*')
  .pipe(gulp.dest('build/assets/fonts'))
  .pipe(browserSync.reload({
          stream: true
  }))
});

//moving php
gulp.task('phpfiles', function() {
  return gulp.src('app/php/**/*')
  .pipe(gulp.dest('build/php'))
  .pipe(browserSync.reload({
          stream: true
  }))
});

//moving css
gulp.task('css', function() {
  return gulp.src('app/assets/css/**/*')
  .pipe(gulp.dest('build/assets/css'))
  .pipe(browserSync.reload({
    stream: true
  }))  
});

//moving js
gulp.task('js', function() {
  return gulp.src('app/assets/js/**/*')
  .pipe(gulp.dest('build/assets/js'))
        .pipe(browserSync.reload({
          stream: true
        }))
});
//moving json
gulp.task('json', function() {
  return gulp.src('app/assets/json/**/*')
  .pipe(gulp.dest('build/assets/json'))
        .pipe(browserSync.reload({
          stream: true
        }))
});

//moving images
gulp.task('images', function() {
  return gulp.src('app/assets/images/**/*')
  .pipe(gulp.dest('build/assets/images'))
        .pipe(browserSync.reload({
          stream: true
        }))
});

gulp.task('materialize', function() {
  return gulp.src('app/assets/materialize/**/*')
  .pipe(gulp.dest('build/assets/materialize'))
        .pipe(browserSync.reload({
          stream: true
        }))
});

// 68796P
