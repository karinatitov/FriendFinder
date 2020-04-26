var express = require("express");
var path = require("path");




var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

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