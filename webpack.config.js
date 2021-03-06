const path = require("path");

module.exports = {
	context : __dirname,
	entry: './js/router/ClientApp.jsx',
	output: {
		path: path.join(__dirname, '/public'),
		filename: "bundle.js"
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: false
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			},{
				test: /\.json$/,
				loader:'json-loader'
			},{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			}
		]
	}

}