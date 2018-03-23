var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs')
var webRouter = require('./routes/index');
var users = require('./routes/users');
var superagent=require('superagent');
var cheerio = require('cheerio');
var app = express();
var mysql =  require('mysql'); 
var RedisStore = require('connect-redis')(session);
var config = require('./config');
var auth = require('./middlewares/auth')
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({ extended: false ,limit: '1mb'}));
app.use(cookieParser(config.session_secret));
app.use(session({
  secret: config.session_secret,
  resave: false,
  store: new RedisStore({
    port: config.redis_port,
    host: config.redis_host,
    db: config.redis_db,
    pass: config.redis_password,
  }),
  saveUninitialized: false,
}));
app.use(auth.authUser);

app.use('/', webRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
