import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, SecureRoute } from './components';
import { Home, Profile, Search, Friends, Messenger, Login } from './pages';

import { checkSessionAsync } from './redux/slices/auth.slice';
import { PostModalProvider } from './context/PostModalContext';
import './index.css';

const App = () => {
  const { user } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSessionAsync());
  }, [dispatch]);
  return (
    <Router>
      {user ? <Header /> : null}
      <Switch>
        <PostModalProvider>
          <SecureRoute exact path='/' component={(props) => <Home {...props} />} />
          <SecureRoute exact path='/profile' component={(props) => <Profile {...props} />} />
          <SecureRoute exact path='/user' component={(props) => <Profile {...props} />} />
          <SecureRoute exact path='/search' component={(props) => <Search {...props} />} />
          <SecureRoute exact path='/friends' component={(props) => <Friends {...props} />} />
          <SecureRoute exact path='/messenger' component={(props) => <Messenger {...props} />} />
          <Route exact path='/auth' component={Login} />
        </PostModalProvider>
      </Switch>
    </Router>
  );
};

export default App;
