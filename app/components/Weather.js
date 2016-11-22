import React, {Component} from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import OpenWeatherMap from 'OpenWeatherMap';

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			alertMessage: 'be empathy, put yourself into other people shoes!'
		};
		this._handleOnSearch = this._handleOnSearch.bind(this);
	}

	_handleOnSearch(location) {
		var that = this;

		//debugger;
		this.setState({
			isLoading:true
		});

		OpenWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				isLoading:false,
				location:location,
				temp: temp
			});
		}, function(err){
			that.setState({
				isLoading: false
			})
			alert(err);
		});
	}

	render() {
		var {isLoading, temp, location} = this.state;//es6 destructing method

		function renderMessage() {
			if(isLoading) {
				return <h3>Fetching Weather</h3>;
			} else if (temp && location)	{
				return (
					<WeatherMessage 
					location={location} 
					temp={temp}/>
				);
			}
		}

		return(
			<div>
				<h3>Get Weather</h3>
				<WeatherForm onSearch={this._handleOnSearch}/>
				{renderMessage()}
			</div>
		)
	}
}
export default Weather;