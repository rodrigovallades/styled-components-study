import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {

	render() {
		// The Button from the last section without the interpolations
		const Button = styled.button`
			color: palevioletred;
			font-size: 1em;
			margin: 1em;
			padding: 0.25em 1em;
			border: 2px solid palevioletred;
			border-radius: 3px;
		`;

		const ReversedButton = props => <a {...props} children={props.children.split('').reverse()} />

		return (
			<React.Fragment>
				<Button>Normal button</Button>
				<Button as={ReversedButton} href="http://www.amaro.com">Custom Button with Normal Button styles</Button>
			</React.Fragment>
		);
	}
}

export default App;
