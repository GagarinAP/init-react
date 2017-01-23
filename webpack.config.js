var webpack = require('webpack');

module.exports = {
    entry: "./src/main.js",
    output: {
    	path: __dirname + "/public",
    	publicPath: "build/",
    	filename: "bundle.js"
    },
    module: {
    	loaders: [
	        {
	        	test: /\.jsx?$/,
	        	exclude: /(node_modules)/,
	        	loader: 'babel',
	        	query: {
	            	presets: ['react', 'es2015']
	        	}
	        },
		    {
	        	test: /\.css$/,
	        	loader: "style-loader!css-loader!autoprefixer-loader",
	        	exclude: [/node_modules/, /public/]
	        }
	    ]
    }
}