var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

app.listen(8006, console.log("running on 8006"))