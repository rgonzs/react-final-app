import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
}
`;

export const Container = styled.div`
  font-family: "Nunito", sans-serif;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    font-family: "Nunito", sans-serif;
    padding-right: 30px;
    padding-left: 30px;
  }
`;
export default GlobalStyle;
