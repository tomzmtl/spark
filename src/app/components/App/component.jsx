import React from 'react';
import Counter from '../Counter/container';

import './styles.scss';


const App = () => (
  <div className="App">
    <h1 className="App__title">Spark!</h1>
    <div className="App__wrapper">
      <Counter />
    </div>
  </div>
);

export default App;
