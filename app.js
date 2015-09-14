//  required variables

var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router;
var form = require('./routes/form');


app.use(bodyParser.urlencoded({extended: true}));



//  nodemon app (starts server)

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%:%d', host, port);
});

module.exports = router;