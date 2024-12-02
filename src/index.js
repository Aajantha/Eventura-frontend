import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot for React 18
import App from './App.js'; // Add the .js extension to the import statement
// import './index.css'; // Correct path to your index.css file

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
