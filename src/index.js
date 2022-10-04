import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as AlertProvider, positions, transitions } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';

import './index.scss';
import reportWebVitals from './reportWebVitals';

import App from './App';


const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
  offset: '30px',
  transition: transitions.SCALE
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </React.StrictMode>
);

reportWebVitals();
