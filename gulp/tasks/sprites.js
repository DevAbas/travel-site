const gulp = require('gulp'),
      svgSprite = require('gulp-svg-sprite'),
      rename = require('gulp-rename');

const config = {
  mode: {
    css: {
      render: {
        css: {
          tempalate: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

gulp.task('createSprite', function(){
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpritePath', function(){
  return gulp.src('./app/temp/sprite')
    .pipe(gulp.dest('./app/assets/styles'));
});
