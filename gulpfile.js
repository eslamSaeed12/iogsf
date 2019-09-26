const gulp = require("gulp");
const autprefixer = require("gulp-autoprefixer");

exports.prefixJs = () => {
  return gulp
    .src("filename.css")
    .pipe(autprefixer('last 2 versions'))
    .pipe(gulp.dest("css"));
};
