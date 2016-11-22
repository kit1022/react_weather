module.exports = {
	entry: './app/app.js',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve:{
		root: __dirname,//path of the file i am in, avalable in node script
		alias:{
			About: 'app/components/About.js',
			Example: 'app/components/Example.js',
			Main: 'app/components/Main.js',
			Nav: 'app/components/Nav.js',
			Weather: 'app/components/Weather.js',
			WeatherForm: 'app/components/WeatherForm.js',
			WeatherMessage: 'app/components/WeatherMessage.js',
			OpenWeatherMap: 'app/api/OpenWeatherMap.js'
		},
		extensions: ['','.js','jsx']
	},
	module:{
		loaders:[
			{
				loader: 'babel-loader',
				query:{//tell babel loader what to do
					presets:['react','es2015','stage-0']
				},
				test: /\.js?$/,
				exclude:/(node_modules|bower_components)/
			}
		]
	},
	devtool: '#eval-source-map'
};