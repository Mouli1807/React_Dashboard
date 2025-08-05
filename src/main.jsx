
// Entry point: renders the App with Redux store provider
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@styles/index.css';
import { Provider } from 'react-redux';
import store from './store/store';


// Render the app, wrapping with Redux Provider for state management
ReactDOM?.createRoot(document.getElementById('root'))?.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
