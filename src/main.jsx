import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './components/styles.css';

// Prevent double mounting in development with Strict Mode
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Web Vitals monitoring (optional - for performance tracking)
if ('web-vital' in window) {
  console.log('Performance monitoring enabled');
}
