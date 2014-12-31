var common = require('./__common__'),
    gulp = require('gulp');

gulp.task('clean', function (cb) {
  require('del')([
    common.files.css,
    common.files.jsApp,
    common.files.dist
  ], {
    force: true
  }, cb);
});
