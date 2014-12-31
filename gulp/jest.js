var gulp = require('gulp');

gulp.task('jest', function () {
  gulp.src('__tests__')
    .pipe(require('gulp-jest')({
      scriptPreprocessor: './support/preprocessor.js',
      testPathIgnorePatterns: [
        '__tests__/support',
        'node_modules'
      ]
    }));
});
