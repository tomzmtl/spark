import React, { PropTypes } from 'react';

const Counter = ({ counter, ...props }) => (
  <div>
    <h2>Hello World!</h2>
    <div>
      <button onClick={props.onDecrement}>-</button>
      <strong> {counter} </strong>
      <button onClick={props.onIncrement}>+</button>
    </div>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
