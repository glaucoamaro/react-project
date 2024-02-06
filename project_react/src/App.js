import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routers';
import './assets/fonts/Poppins-Light.ttf';
import './assets/fonts/Poppins-Bold.ttf';

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}
