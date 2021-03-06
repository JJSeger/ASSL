var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:3000/nodetest1');


var index = require('./routes/index'); //index page route
var artists = require('./routes/artists'); //artists page route
var globe = require('./routes/globe'); //globe page route
var gallery= require('./routes/gallery'); //gallery page route
var chat = require('./routes/chat'); //chat page route
var feedback = require('./routes/feedback'); //feedback page route

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); //html engine

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json()); //this parses the html
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





// Make our db accessible to our router-this must be placed
// exactly where it is or the app will not work
app.use(function(req,res,next){
  req.db = db;
  next();
});


app.use('/', index); //home
app.use('/artists', artists); //artists 
app.use('/globe', globe); //globe
app.use('/gallery', gallery); //gallery
app.use('/chat', chat); //chat
app.use('/feedback', feedback); //feedback



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

