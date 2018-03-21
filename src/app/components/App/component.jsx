import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Counter from '../Counter/container';

import './styles.scss';


const App = ({ counter }) => {
  const classes = classnames({
    App: true,
    [`App--theme-${counter % 6}`]: true,
  });

  return (
    <div className={classes}>
      <div className="App__wrapper">
        <h1 className="App__title">Spark!</h1>
        <h2 className="App__subtitle">Yet another React boilerplate.</h2>
        <Counter />
        <a className="App__github" href="https://github.com/tomzmtl/spark" target="blank">
          <img
            className="App__github-img"
            src="/public/images/github-logo.png"
            alt="See GitHub repo"
          />
        </a>
      </div>
    </div>
  );
};

App.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default App;
