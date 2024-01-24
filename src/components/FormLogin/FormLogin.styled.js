import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FormContainer= styled.form`
display:flex;
flex-direction:column;
gap:20px;
align-items: center;
justify-content: center;

width: 499px;
  flex-shrink: 0;
  margin-top: 30px;

  border-radius: 29px;
  background: #fff;
  box-shadow: 0px 4px 21.3px 0px rgba(0, 0, 0, 0.25);
  padding: 32px 46px;
`

export const InputLabel = styled.label`
 display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 16px;
  color: #b2b2b2;
  font-size: 12px;
  font-weight: 600;
  padding-left: 10px;
  `

export const Btn = styled.button `
/* margin-top: 5px;
 height: 35px;
 border-radius: 16px;
 border: none;
 background-color: lightblue;
  &:hover,
  &:focus{
    background-color: blue;   
  } */
  width: 80%;
  height: 43px;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s linear;

  border-radius: 31px;
  background-color: #000;

  &:hover {
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
  }

  &:focus {
    outline: none;
  }
  ;`

  export const FormTitle = styled.h3`
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;`

  export const InputStyled = styled.input`
   padding: 10px;
  font-size: 12px;
  font-weight: 400;
  border-radius: 4px;
  

  &:focus,
  &:hover {
   border-color: red;
    border: 2px solid #000;
  }
  `;

  export const LinkRegister = styled(NavLink)`
  font-size: 15px;
  text-decoration: none;
  &:hover {
    color: darkslategray;
  }
  `