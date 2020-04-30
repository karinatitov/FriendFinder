var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");




var app = express();
var PORT = process.env.PORT || 8080;

// set up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// require routing files
var apiRouts = require('./app/routing/apiRouts');
var htmlRouts = require('./app/routing/htmlRouts');
app.use(apiRouts);
app.use(htmlRouts);

// listener
app.listen(PORT, err => {
    if (err) throw err;
    console.log("Listening on http://localhost:" + PORT);
});