import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import './index.css';
import SecureRoute from './components/SecureRoute/SecureRoute';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import { checkSessionAsync } from './redux/slices/user.slice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkSessionAsync());
  }, []);

  return (
    <Router>
      <Switch>
        <SecureRoute exact path='/' component={(props) => <Home {...props} />} />
        <SecureRoute exact path='/profile' component={(props) => <Profile {...props} />} />
        <Route exact path='/auth' component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
