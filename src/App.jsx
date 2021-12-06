import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import './index.css';
import SecureRoute from './components/SecureRoute/SecureRoute';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import Friends from './pages/Friends/Friends';
import Messenger from './pages/Messenger/Messenger';
import { checkSessionAsync } from './redux/slices/auth.slice';
import { PostModalProvider } from './context/PostModalContext';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkSessionAsync());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <PostModalProvider>
          <SecureRoute exact path='/' component={(props) => <Home {...props} />} />
          <SecureRoute exact path='/profile' component={(props) => <Profile {...props} />} />
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
