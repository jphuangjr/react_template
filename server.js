var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(8006, console.log("running on 8006"));

app.get("/", function (request, response) {
	response.sendFile(__dirname + '/index.html');
});