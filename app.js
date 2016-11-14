var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require("http");
var mongoose = require("mongoose");

var controllers = require('./controllers');

var app = express();
var server = http.Server(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/mapsvolley', controllers);

mongoose.connect("mongodb://localhost/mapsvolley");

server.listen(process.env.PORT || 3000);


module.exports = app;
