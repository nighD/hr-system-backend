var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
import usersRouter from './routes/users';
import indexRouter from './routes/index';
import teamsRouter from './routes/teams';
import leavesRouter from './routes/leaves';
import goalsRouter from './routes/goals';
import payroll_typesRouter from './routes/payroll_types';
const scheduler = require('./scheduler');
var app = express();
app.locals.moment = require('moment');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/leaves', leavesRouter);
app.use('/api/goals', goalsRouter);
app.use('/api/payroll_types',payroll_typesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
scheduler.start();
module.exports = app;
