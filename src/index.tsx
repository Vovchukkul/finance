import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bulma';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
