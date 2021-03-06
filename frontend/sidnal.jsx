import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let preloadedState = undefined;

  const store = configureStore(preloadedState);

  // testing
  window.store = store;

  ReactDOM.render(<Root store={store}/>, root);
});