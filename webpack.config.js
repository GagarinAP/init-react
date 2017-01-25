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
	        },
          {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
          },
          {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
          },
          {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
          },
          {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
          }
	    ]
    }
}
