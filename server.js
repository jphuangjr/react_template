var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8081;

var createDirectMail = require("directmail");
var directMail = createDirectMail();

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
	var webpackDevMiddleware = require('webpack-dev-middleware');
	var webpackHotMiddleware = require('webpack-hot-middleware');
	var webpack = require('webpack');
	var config = require('./webpack.config');
	var compiler = webpack(config);

	app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
	app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname)));

app.get('*', function(request, response) {
	response.sendFile(path.resolve(__dirname, "index.html"))
});

app.post("/email", function(req, res){
	console.log(req)
});

app.listen(PORT, function(error) {
	if (error) {
		console.error(error);
	} else {
		console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
	}
});