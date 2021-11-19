import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login/Login';
import Profile from '../../pages/Profile/Profile';
import { checkSessionAsync } from '../../redux/slices/user.slice';

const SecureRoute = (props) => {
  const { hasUser } = useSelector((state) => state.user);

  if (hasUser === null) {
    return <div>Cargando</div>;
  }
  if (hasUser) {
    return <Route {...props} />;
  }
  if (!hasUser) {
    return <Redirect to='/auth' />;
  }
};

export default SecureRoute;
