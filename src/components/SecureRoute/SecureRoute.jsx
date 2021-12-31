import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import Spinner from '../Spinner/Spinner';

const SecureRoute = (props) => {
  const { hasUser } = useSelector((state) => state.auth);

  if (hasUser === null) {
    return <Spinner />;
  }
  if (hasUser) {
    return <Route {...props} />;
  }
  if (!hasUser) {
    return <Redirect to='/auth' />;
  }
};

export default SecureRoute;
