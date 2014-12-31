var common = require('./__common__'),
    cwd = process.cwd(),
    gulp = require('gulp'),
    path = require('path');

gulp.task('browserify', [
  'jest',
  'jscs'
], function () {
  require('browserify')()
    .transform(require('reactify'))
    .add(path.join(cwd, common.files.jsSrc), {
      basedir: path.join(cwd, common.files.jsx),
      debug: true
    })
    .bundle()
    .pipe(require('vinyl-source-stream')('.'))
    .pipe(gulp.dest(common.files.jsApp));
});
