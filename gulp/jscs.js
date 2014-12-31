var common = require('./__common__'),
    gulp = require('gulp');

gulp.task('jscs', function () {
  gulp.src(common.files.allJsFiles)
    .pipe(require('gulp-jscs')());
});
