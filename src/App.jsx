import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, withRouter, useLocation, Redirect } from 'react-router-dom';

import { Header, SecureRoute } from './components';
import { Home, Profile, Search, Friends, Messenger, Login } from './pages';

import { checkSessionAsync } from './redux/slices/user.slice';
import { PostModalProvider } from './context/PostModalContext';
import './index.css';

const App = () => {
  const { hasUser } = useSelector((state) => state.user);

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSessionAsync());
  }, [dispatch]);

  return (
    <>
      {hasUser && location.pathname !== '/auth' ? <Header /> : null}
      <Switch>
        <PostModalProvider>
          <SecureRoute exact path='/' component={(props) => <Home {...props} />} />
          <SecureRoute exact path='/profile' component={(props) => <Profile {...props} />} />
          <SecureRoute exact path='/user' component={(props) => <Profile {...props} />} />
          <SecureRoute exact path='/search' component={(props) => <Search {...props} />} />
          <SecureRoute exact path='/friends' component={(props) => <Friends {...props} />} />
          <SecureRoute exact path='/messenger' component={(props) => <Messenger {...props} />} />
          <Route path='/auth' component={Login} />
          {hasUser && location.pathname === '/auth' && <Redirect to={Home} />}
        </PostModalProvider>
      </Switch>
    </>
  );
};

export default withRouter(App);
