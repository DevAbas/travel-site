const gulp = require('gulp'),
      watch = require('gulp-watch'),
      browserSync = require('browser-sync').create();


/*CssInject Task*/
gulp.task('cssInject',['styles'],function(){
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream())
});

gulp.task('scriptsRefresh', ['scripts'], function (){
  browserSync.reload();
});

/*Watch Task*/
gulp.task('watch', function(){

    browserSync.init({
      notify: false,
      server: {
        baseDir: "app"
      }
    })

    watch('./app/index.html', function(){
      browserSync.reload();
    });

    watch('./app/assets/scripts/**/*.js', function(){
      gulp.start('scriptsRefresh');
    })

    watch('./app/assets/styles/**/*.css', function(){
      gulp.start('cssInject');
    });

  });