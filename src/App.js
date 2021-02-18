import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContext } from './context/auth';
import { useCookies } from 'react-cookie';
import PrivateRoute from './routes/privateRoute.js';
import Home from './screens/Home';
import Application from './screens/App';

import './index.css';

function App() {
  const [cookie, setCookie] = useCookies(['zulul']);
  const existingCookie = cookie.zulul;

  const handleCookie = (data) => {
    setCookie('zulul', data, {path: '/'});
  };  

  return (
    <AuthContext.Provider value = {{existingCookie, setCookie:handleCookie }}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <PrivateRoute  path="/app" component={Application} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;