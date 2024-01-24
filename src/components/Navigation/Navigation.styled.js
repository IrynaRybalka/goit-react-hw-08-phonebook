import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
   color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 30px 0;
  text-decoration: none;
  `

export const Nav = styled.nav`
   display: flex;
  flex-direction: row;

  gap: 22px`;