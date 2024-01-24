import {Route, Routes} from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from 'pages/HomePage/HomePage';


import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'store/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'store/auth/operation';
import { RestrictedRoute } from './Route/RestrictedRoute';
import RegistrationPage from 'pages/Registrtation';
import LoginPage from 'pages/Login';
import { PrivateRoute } from './Route/PrivateRoute';
import Contacts from 'pages/Contacts';





export const App = () => {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
<Routes>
  <Route path="/" element ={<Layout/>} >
    <Route index element={<Home/>}/>
    <Route path="register" element ={
           <RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />
          }/>
           <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
     <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />


  </Route>
</Routes>
  )
};
