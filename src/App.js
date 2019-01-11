import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {

	render() {
		const Button = styled.button`
			/* Adapt the colors based on primary prop */
			background: ${props => props.primary ? "palevioletred" : "white"};
			color: ${props => props.primary ? "white" : "palevioletred"};

			font-size: 1em;
			margin: 1em;
			padding: 0.25em 1em;
			border: 2px solid palevioletred;
			border-radius: 3px;
		`;

		return (
			<React.Fragment>
				<Button>Normal</Button>
				<Button primary>Primary</Button>
			</React.Fragment>
		);
	}
}

export default App;
