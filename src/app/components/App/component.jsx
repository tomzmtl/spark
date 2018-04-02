import React from 'react';
import { routerPropTypes } from 'fans-router';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import AboutView from '../AboutView/component';
import RootView from '../RootView/component';

import './styles.scss';


const App = ({ counter, route }) => {
  const classes = classnames({
    App: true,
    [`App--theme-${counter % 6}`]: true,
  });

  return (
    <div className={classes}>
      <div className="App__wrapper">
        { route.name === 'root' ? <RootView /> : <AboutView />}
      </div>
    </div>
  );
};

App.propTypes = {
  counter: PropTypes.number.isRequired,
  route: routerPropTypes.route, // eslint-disable-line
};

export default App;
