import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const SecureRoute = (props) => {
  const { hasUser } = useSelector((state) => state.auth);

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
