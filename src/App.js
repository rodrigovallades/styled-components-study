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

		// A new component based on Button, but with some override styles
		const TomatoButton = styled(Button)`
			color: tomato;
			border-color: tomato;
		`;

		return (
			<React.Fragment>
				<Button>Normal button</Button>
				<Button as="a" href="/">Link with Button styles</Button>
				<TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>
			</React.Fragment>
		);
	}
}

export default App;
