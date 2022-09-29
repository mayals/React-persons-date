import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js'

// "bootstrap": "^5.2.1",
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
