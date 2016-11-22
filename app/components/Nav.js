import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

export default (props) => {
	return(
		<div>
			<h2>navigation</h2>
			<ul>
				<li><IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
				<li><Link to='about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
				<li><Link to='example' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link></li>
			</ul>
		</div>
	);
};