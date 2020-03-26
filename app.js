const express = require('express');
const app = express();

app.use('/' || '/index', function(req, res, next) {
  res.write("HELLO FREND");
});

module.exports = app;
