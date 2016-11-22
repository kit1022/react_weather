import React, {Component} from 'react';
import Nav from 'Nav';

export default (props) => {
	return(
		<div>
			<h1>Main component</h1>
			<Nav />
			{props.children}
		</div>
	);
};
