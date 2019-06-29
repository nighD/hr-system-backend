"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _users = _interopRequireDefault(require("./routes/users"));

var _index = _interopRequireDefault(require("./routes/index"));

var _teams = _interopRequireDefault(require("./routes/teams"));

var _leaves = _interopRequireDefault(require("./routes/leaves"));

var createError = require('http-errors');

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan'); // var indexRouter = require('./routes/index');


var scheduler = require('./scheduler');

var app = express();
app.locals.moment = require('moment'); // view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/', _index["default"]);
app.use('/api/users', _users["default"]);
app.use('/api/teams', _teams["default"]);
app.use('/api/leaves', _leaves["default"]); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
scheduler.start();
module.exports = app;
//# sourceMappingURL=app.js.map