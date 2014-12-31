var common = require('./__common__'),
    gulp = require('gulp');

gulp.task('build', [
  'clean',
  'uglify',
  'cssmin'
], function (cb) {
  require('git-rev').long(function (sha1) {
    gulp.src(common.files.html)
      .pipe(require('gulp-replace')(/app.(js|css)/g, 'app-' + sha1.substr(0, common.sha1length) + '.$1'))
      .pipe(gulp.dest(common.files.dist));
  })
});
