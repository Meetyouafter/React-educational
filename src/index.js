import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Count from './components/Count';
import { Provider } from 'react-redux';
import store from './store/store';
import Person from './components/Person';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Count />
    <Person />
    </Provider>
  </React.StrictMode>
);
