

import { RegisterLink, Wrapper } from "./AuthNav.styled";


export const AuthNav = () => {
  return (
    <Wrapper>
      <RegisterLink to="/register">Register</RegisterLink>
      <RegisterLink to="/login">Log in</RegisterLink>
    </Wrapper>
  );
};