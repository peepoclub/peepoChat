import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import './index.css';

import App from './App';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render((
  <CookiesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </CookiesProvider>
  
), document.getElementById('root'));

serviceWorkerRegistration.register();