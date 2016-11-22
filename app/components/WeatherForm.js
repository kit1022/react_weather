import React, {Component} from 'react';

class WeatherForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};

		this._handleFormSubmit = this._handleFormSubmit.bind(this);
	}

	_handleFormSubmit(e) {
		e.preventDefault();

		var location = this.refs.location.value;

		if(location.length > 0) {//check if location value available
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	}

	render() {
		return(
			<form onSubmit={this._handleFormSubmit}>
				<input type="text" ref='location'/>
				<button>Get Weather</button>
			</form>
		)
	}
}
export default WeatherForm;