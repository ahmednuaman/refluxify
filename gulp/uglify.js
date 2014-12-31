var common = require('./__common__'),
    gulp = require('gulp'),
    sha1suffix = require('gulp-gitshasuffix');

gulp.task('uglify', [
  'browserify'
], function () {
  gulp.src(common.files.jsApp)
    .pipe(require('gulp-uglify')())
    .pipe(sha1suffix({
      length: common.sha1length
    }))
    .pipe(gulp.dest(common.files.dist + common.files.js));
});
