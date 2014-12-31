var common = require('./__common__'),
    gulp = require('gulp');

gulp.task('cssmin', [
  'less'
], function () {
  gulp.src(common.files.css + '**/*.css')
    .pipe(require('gulp-cssmin')())
    .pipe(require('gulp-gitshasuffix')({
      length: common.sha1length
    }))
    .pipe(gulp.dest(common.files.dist + common.files.css));
});
