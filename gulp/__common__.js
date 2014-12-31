var files = {
      css: 'assets/css/',
      dist: 'dist/',
      html: 'index.html',
      js: 'assets/js/',
      jsApp: 'assets/js/app.js',
      jsSrc: 'assets/jsx/app.jsx',
      jsTests: '__tests__/**/*.js',
      jsx: 'assets/jsx/',
      jsxFiles: 'assets/jsx/**/*.jsx',
      less: 'assets/less/app.less',
      lessAll: 'assets/less/**/*.less'
    };

files.allJsFiles = [
  files.jsSrc,
  files.jsTests, 
  files.jsxFiles,
  '*.js'
];

module.exports = {
  files: files,
  port: 8000,
  sha1length: 10
};
