var common = require('./__common__'),
    gulp = require('gulp'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function () {
  gulp.src(common.files.less)
    .pipe(sourcemaps.init())
    .pipe(require('gulp-less')({
      paths: [
        path.join(process.cwd(), 'node_modules')
      ]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(common.files.css));
});
