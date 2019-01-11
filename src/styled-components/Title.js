import styled from 'styled-components';

export default styled.h1`
  color: ${props => (props.textColor ? "palevioletred" : "black")};
  font-size: ${props => (props.small ? "1" : "2")}em;
  text-align: center;
`;
