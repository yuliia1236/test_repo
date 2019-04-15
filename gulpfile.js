
let gulp = require('gulp');
let sass = require('gulp-sass');

const style = () => {
  return(
    gulp.src('APP/SCSS/*.scss')
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(gulp.dest('APP/CSS'))
  );
}

const  watch = () => {
  gulp.watch('APP/SCSS/*.scss', style)
}

exports.style = style;
exports.watch = watch;