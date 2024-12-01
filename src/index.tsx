import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import './assets/css/components/Navbar.css';
import Home from './pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
