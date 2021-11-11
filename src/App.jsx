import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/user' element={<Profile />} />
        <Route exact path='/auth' element={<Login />} />
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<Navigate to='/auth' />} />
      </Routes>
    </Router>
  );
};

export default App;
