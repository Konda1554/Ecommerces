import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import {store} from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from './Redux/Store';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-j8i38jv0.us.auth0.com"
    clientId="qTKGIzI776tli33cdTDL4poeyoyLl7Hl"
    redirectUri={window.location.origin}>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
