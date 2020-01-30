import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import AuthProvider from './providers/AuthProvider';
import { initMiddleware } from 'devise-axios';

initMiddleware();
ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </AuthProvider>
  , document.getElementById('root')
);