import styled from "styled-components";
import { Container } from "./../../globalStyles";
import fondo from "./../../assets/images/fondo.svg";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  ${Container}
  @media only screen and (max-width: 600px) {
    display: static;
    /* position: lock; */
    /* align-items: center;
    justify-content: center; */
    min-width: 80%;
    height: 100%;
    overflow: hidden;
  }
`;

export const TitleContainer = styled.h2`
  color: white;
  padding-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  z-index: 2;
  @media only screen and (max-width: 600px) {
    /* display: initial; */
    /* align-items: center; */
    /* justify-content: center; */
    /* width: 380px; */
  }
`;

export const SearchLabel = styled.label`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: white;
  letter-spacing: 1px;
`;

export const SearchSelect = styled.select`
  margin-bottom: 20px;
  height: 40px;
  text-align: center;
  border-radius: 5px;
  width: 300px;
`;

export const SearchInput = styled.input`
  margin-bottom: 20px;
  height: 40px;
  text-align: center;
  border-radius: 5px;
  width: 300px;
  border: 0px;
  &:focus {
    outline: none;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -moz-appearance: textfield;
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const SearchButton = styled.button`
  background-color: white;
  font-size: 1.2rem;
  width: 300px;
  color: $button-font-color;
  border-radius: 20px;
  font-weight: bold;
  border: 0;
  height: 30px;
`;
