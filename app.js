const dotenv = require("dotenv");
dotenv.config();

var createError = require('http-errors');
var express = require('express');
var cors = require('cors')

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var otp = require('./routes/otp');
var addLink = require('./routes/addLink');
var bookmark = require('./routes/bookmark');
var webScrapper = require('./routes/webScrapper');
var getFeedTitle = require('./routes/getFeedTitle');
var aboutRouter = require('./routes/about');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('combined'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/otp', otp);
app.use('/addLink', addLink);
app.use('/bookmark', bookmark);
app.use('/webScrapper',webScrapper );
app.use('/getTitle',getFeedTitle );
app.use('/about', aboutRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
