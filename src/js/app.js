import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import counter from './reducers/counter';
import store from './store';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={createStore(counter, store)}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
});
