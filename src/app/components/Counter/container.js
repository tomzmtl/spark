import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../../redux/actions/counter';
import Counter from './component';


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
