import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

const theme = {
	primary: '#00aaaa',
	secondary: '#f04',
	tertiary: 'yellow',
}

const themeB = {
	...theme,
	primary: 'maroon',
}

const getThemeProp = (key) => (props) => props.theme[key];

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, d) => {
  acc[d] = `@media (min-width: ${sizes[d]}px)`;

  return acc;
}, {});

const Content = styled.div`
	background: ${props => props.theme.primary};
	height: 3em;
	transition: width 0.3s linear;
	width: 3em;
	will-change: width;
	text-align: center;
	display: flex;
	color: white;
	justify-content: center;
	align-items: center;

	::before {
		content: '1';
	}

	${media.tablet} {
		background-color: ${getThemeProp('secondary')};
		width: 6rem;

		::before {
			content: '2';
		}
	}

	${media.desktop} {
		background-color: ${getThemeProp('tertiary')};
		color: black;
		width: 12rem;

		::before {
			content: '3';
		}
	}


  /* Now we have our methods on media and can use them instead of raw queries */
`;

class App extends Component {

  render() {
    return (
			<ThemeProvider theme={themeB}>
				<Content />
			</ThemeProvider>
    )
  }
}

export default App;
