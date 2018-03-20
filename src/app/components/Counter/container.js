import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../../redux/actions/counter';
import Counter from './component';


const mapState = state => ({
  counter: state.counter,
});

const mapActions = dispatch => ({
  onIncrement: () => {
    dispatch(incrementCounter());
  },
  onDecrement: () => {
    dispatch(decrementCounter());
  },
});

export default connect(mapState, mapActions)(Counter);
