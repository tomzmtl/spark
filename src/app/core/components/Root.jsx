import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from '../../counter/containers/Counter';
import counterReducer from '../../counter/reducer';
import store from '../../core/store';

import '../../../scss/app.scss';


export default (
  <Provider store={createStore(counterReducer, store)}>
    <Counter />
  </Provider>
);
