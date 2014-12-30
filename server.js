var express = require('express'),
    port = process.env.PORT || 8000;

express()
  .use(require('connect-livereload')())
  .use('/', express.static(__dirname))
  .listen(port, function () {
    console.log('Running on ' + port);
  });
