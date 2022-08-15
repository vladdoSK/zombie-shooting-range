import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store_redux } from './redux/store_redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store_redux}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);

