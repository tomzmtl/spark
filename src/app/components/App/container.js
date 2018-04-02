import { connect } from 'react-redux';
import { getRoute } from 'fans-router';
import App from './component';


const mapState = state => ({
  counter: state.counter,
  route: getRoute(state),
});

export default connect(mapState)(App);
