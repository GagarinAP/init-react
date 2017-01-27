var config = {
   entry: './src/index.js',
   output: {
      path:'./public',
      filename: 'bundle.js',
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
               presets: ['es2015', 'react']
            }
         },{
	        	test: /\.css$/,
	        	loader: "style-loader!css-loader!autoprefixer-loader",
	        	exclude: [/node_modules/, /public/]
	        }
      ]
   }
}

module.exports = config;
