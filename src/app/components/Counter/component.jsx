import React from 'react';
import PropTypes from 'prop-types';


const Counter = ({ counter, onDecrement, onIncrement }) => (
  <div>
    <h2>Hello World!</h2>
    <div>
      <button onClick={onDecrement}>-</button>
      <strong> {counter} </strong>
      <button onClick={onIncrement}>+</button>
    </div>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
