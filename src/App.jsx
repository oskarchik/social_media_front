import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import './index.css';
import SecureRoute from './components/SecureRoute/SecureRoute';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import { checkSessionAsync } from './redux/slices/auth.slice';

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
        <SecureRoute exact path='/search' component={(props) => <Search {...props} />} />
        <Route exact path='/auth' component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
