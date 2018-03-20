import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from '../Counter/container';
import counterReducer from '../../redux/reducers/counter';
import store from '../../redux/store';

import '../../../scss/app.scss';


export default (
  <Provider store={createStore(counterReducer, store)}>
    <Counter />
  </Provider>
);
