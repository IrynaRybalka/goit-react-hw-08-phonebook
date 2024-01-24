import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'store/auth/selectors';
import { Link, Nav } from './Navigation.styled';


export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
};