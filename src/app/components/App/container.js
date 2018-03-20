import { connect } from 'react-redux';
import App from './component';


const mapState = state => ({
  counter: state.counter,
});

export default connect(mapState)(App);
