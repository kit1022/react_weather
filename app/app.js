import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import About from 'About';
import Weather from 'Weather';
import Example from 'Example';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Weather}/>
			<Route path='example' component={Example}/>
			<Route path='about' component={About}/>
		</Route>
	</Router>,
	document.querySelector('#app')
);