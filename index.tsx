import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Remove loading spinner once React mounts
const removeLoadingSpinner = () => {
  const spinner = document.getElementById('loading-spinner');
  if (spinner) {
    spinner.style.opacity = '0';
    spinner.style.transition = 'opacity 0.3s ease-out';
    setTimeout(() => spinner.remove(), 300);
  }
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Remove loading spinner after React mounts
setTimeout(removeLoadingSpinner, 100);