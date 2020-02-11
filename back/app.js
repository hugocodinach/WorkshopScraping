var express = require("express");
var app = express();

var CardController = require('./Card/CardController');

app.use(
    CardController
);

module.exports = app;
