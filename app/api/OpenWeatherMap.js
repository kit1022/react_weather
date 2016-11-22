import axios from 'axios';

const API_KEY = '1eb5e074c3fa10a87528141ba7339f1f'
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		console.log('requestUrl:', requestUrl);
		//get the json data from the url using axio
		//axios is using promise
		return axios.get(requestUrl).then(function(res){
			//debugger;
			if(res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		},function(res){
			throw new Error(res.data.message)
		});
	}
}
