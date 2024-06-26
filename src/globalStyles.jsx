import styled, { createGlobalStyle } from 'styled-components';
import fondo from './assets/images/fondo.png';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
}

html {
  background: url(${fondo}) no-repeat center center fixed; 
  background-size: cover;
  min-height:100%;
  @media only screen and (max-width: 900px) {
    /* height: 100vh; */
    /* overflow: hidden; */
  }
}
`;

export const BodyContainer = styled.html`
  /* height: 100%; */
`;

export const Container = styled.div`
  font-family: 'Nunito', sans-serif;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    font-family: 'Nunito', sans-serif;
    padding-right: 30px;
    padding-left: 30px;
  }
`;
export default GlobalStyle;
