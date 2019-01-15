import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { color, width } from 'styled-system';

const theme = {
	colors: {
		primary: '#00aaaa',
		secondary: '#f04',
		tertiary: 'yellow',
	},
	breakpoints: {
		sm: 0,
		md: 480,
		lg: 768,
	}
};

const Content = styled.div`
	${color}
	${width}
	height: 3em;
	transition: width 0.3s linear;
	will-change: width;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;

	::before {
		content: '1';
	}
`;

class App extends Component {

  render() {
    return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<Content bg={{ sm: 'secondary', md: 'tertiary', lg: 'primary' }} width={{ sm: '3rem', md: '6rem', lg: '12rem' }}/>
					<Content bg={{ sm: 'tertiary', md: 'primary', lg: 'secondary' }} width={{ sm: '3rem', md: '6rem', lg: '12rem' }}/>
					<Content bg={{ sm: 'primary', md: 'secondary', lg: 'tertiary' }} width={{ sm: '3rem', md: '6rem', lg: '12rem' }}/>
				</React.Fragment>
			</ThemeProvider>
    )
  }
}

export default App;
