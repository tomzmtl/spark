import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './counter/containers/Counter';
import counterReducer from './counter/reducer';
import store from './core/store';

import '../scss/app.scss';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={createStore(counterReducer, store)}>
      <Counter />
    </Provider>,
    document.getElementById('app')
  );
});
