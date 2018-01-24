const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const db = require('./models').db;

const app = express();


// use morgan logging middleware
app.use(morgan('dev'));

//body-parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve dynamic routes
app.use('/api', require('./api'));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// failed to catch req above means 404, forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle any errors
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send(err.message);
});

// listen on a port
app.listen(3000, function() {
  console.log('The server is listening closely on port', 3000);
});
