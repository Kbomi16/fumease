var createError = require('http-errors');
//Express를 변수에 담기
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//Express 호출 후 새로운 Express 애플리케이션을 변수(app)에 넣기
var app = express();

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('fumease', 'root', 'yun0415', {
  host: '127.0.0.1',
  dialect: "mysql",
  logging: false
});

var session = require("express-session")
const MySQLStore = require('express-mysql-session')(session);
var sessionStore = new MySQLStore({
  host: "127.0.0.1",
  port: 3306,
  user: 'root',
  password: 'yun0415',
  database: 'fumease'
});

var modelInit = require("./model.js");
modelInit(Sequelize, sequelize)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


