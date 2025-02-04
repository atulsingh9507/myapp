import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<Auth0Provider
    domain="dev-w5z3joy4yvku36wc.eu.auth0.com"
    clientId="eF5CyCnzB0QmR68MzsJc4H86lVcOGtgr"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>
);

