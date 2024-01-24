import { NavLink } from "react-router-dom";
import { styled } from "styled-components";


export const Wrapper = styled.div`
 display: flex;
  flex-direction: row;
  gap: 30px;`

  export const RegisterLink = styled(NavLink)`
   width: 120px;
  height: 38px;
  border-radius: 12px;
  background-color: #000;
 text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  border: 1px solid #000;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
  }`