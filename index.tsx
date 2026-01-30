import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ERROR_MESSAGES } from './constants';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error(ERROR_MESSAGES.NO_ROOT_ELEMENT);
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
