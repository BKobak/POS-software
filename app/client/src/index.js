import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';

// Create a root for the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);