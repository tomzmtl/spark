import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions';
import Counter from '../components/Counter';


const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => {
    dispatch(incrementCounter());
  },
  onDecrement: () => {
    dispatch(decrementCounter());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
