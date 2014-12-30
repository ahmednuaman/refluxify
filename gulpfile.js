var gulp = require('gulp'),
    files = {
      css: 'assets/css/',
      dist: 'dist/',
      html: 'index.html',
      js: 'assets/js/',
      jsApp: 'assets/js/app.js',
      jsSrc: 'assets/jsx/app.jsx',
      jsTests: '__tests__/spec/**/*.spec.js',
      jsx: 'assets/jsx/',
      jsxFiles: 'assets/jsx/**/*.jsx',
      less: 'assets/less/app.less',
      lessAll: 'assets/less/**/*.less'
    },
    path = require('path'),
    port = 8000,
    replace = require('gulp-replace'),
    server = require('gulp-express'),
    sha1length = 10,
    sha1suffix = require('gulp-gitshasuffix'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    allJsFiles;

allJsFiles = [
  files.jsSrc,
  files.jsTests, 
  files.jsxFiles,
  '*.js'
];

gulp.task('default', [
    'browserify',
    'less'
  ], function () {
  server.run({
    file: 'server.js',
    envVars: {
      PORT: 8000
    }
  });

  watch([
    files.css + '**/*',
    files.js + '**/*',
    files.html
  ], server.notify);

  watch(allJsFiles, function () {
    gulp.start([
      'browserify'
    ]);
  });
  watch(files.lessAll, function () {
    gulp.start('less');
  });

  require('openurl').open('http://localhost:' + port);
});

gulp.task('build', [
  'clean',
  'uglify',
  'cssmin'
], function (cb) {
  require('git-rev').long(function (sha1) {
    gulp.src(files.html)
      .pipe(replace(/app.(js|css)/g, 'app-' + sha1.substr(0, sha1length) + '.$1'))
      .pipe(gulp.dest(files.dist));
  })
});

gulp.task('browserify', [
  'jest',
  'jscs'
], function () {
  require('browserify')()
    .transform(require('reactify'))
    .add(path.join(__dirname, files.jsSrc), {
      basedir: path.join(__dirname, files.jsx),
      debug: true
    })
    .bundle()
    .pipe(require('vinyl-source-stream')('.'))
    .pipe(gulp.dest(files.jsApp));
});

gulp.task('clean', function (cb) {
  require('del')([
    files.css,
    files.jsApp,
    files.dist
  ], {
    force: true
  }, cb);
});

gulp.task('cssmin', [
  'less'
], function () {
  gulp.src(files.css + '**/*.css')
    .pipe(require('gulp-cssmin')())
    .pipe(sha1suffix({
      length: sha1length
    }))
    .pipe(gulp.dest(files.dist + files.css));
});

gulp.task('jest', function () {
  gulp.src('__tests__')
    .pipe(require('gulp-jest')({
      unmockedModulePathPatterns: [
        'node_modules/react'
      ],
      testDirectoryName: 'spec',
      testPathIgnorePatterns: [
        'node_modules',
        'spec/support'
      ],
      moduleFileExtensions: [
        'js',
        'jsx',
        'json'
      ]
    }));
});

gulp.task('jscs', function () {
  gulp.src(allJsFiles)
    .pipe(require('gulp-jscs')());
});

gulp.task('less', function () {
  gulp.src(files.less)
    .pipe(sourcemaps.init())
    .pipe(require('gulp-less')({
      paths: [
        path.join(__dirname, 'node_modules')
      ]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(files.css));
});

gulp.task('uglify', [
  'browserify'
], function () {
  gulp.src(files.jsApp)
    .pipe(require('gulp-uglify')())
    .pipe(sha1suffix({
      length: sha1length
    }))
    .pipe(gulp.dest(files.dist + files.js));
});
