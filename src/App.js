import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {

	render() {
		// Custom component
		const Link = ({ className, children }) => (
			<a className={className} href="/">
				{children}
			</a>
		)

		const StyledLink = styled(Link)`
			color: palevioletred;
			font-weight: bold;
		`
		return (
			<React.Fragment>
				<Link>Unstyled, boring link</Link>
				<br />
				<StyledLink>Styled, cool link</StyledLink>
			</React.Fragment>
		);
	}
}

export default App;
