var common = require('./__common__'),
    gulp = require('gulp'),
    port = 8000,
    server = require('gulp-express'),
    watch = require('gulp-watch');

gulp.task('default', [
    'browserify',
    'less'
  ], function () {
  server.run({
    file: 'server.js',
    envVars: {
      PORT: common.port
    }
  });

  watch([
    common.files.css + '**/*',
    common.files.js + '**/*',
    common.files.html
  ], server.notify);

  watch(common.files.allJsFiles, function () {
    gulp.start([
      'browserify'
    ]);
  });
  watch(common.files.lessAll, function () {
    gulp.start('less');
  });

  require('openurl').open('http://localhost:' + common.port);
});
