import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ApiProvider from './contexts/ApiProvider';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
