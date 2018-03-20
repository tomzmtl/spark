import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Counter from '../Counter/container';

import './styles.scss';


const App = ({ counter }) => {
  const classes = classnames({
    App: true,
    [`App--theme-${counter % 5}`]: true,
  });

  return (
    <div className={classes}>
      <div className="App__wrapper">
        <h1 className="App__title">Spark!</h1>
        <Counter />
      </div>
    </div>
  );
};

App.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default App;
