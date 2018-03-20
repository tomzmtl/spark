import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const Counter = ({ counter, onDecrement, onIncrement }) => (
  <div className="Counter">
    <button className="Counter__button" onClick={onDecrement}>-</button>
    <div className="Counter__count">
      <span className="Counter__number">{counter}</span>
    </div>
    <button className="Counter__button" onClick={onIncrement}>+</button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
