import { reducer as routerReducer } from 'fans-router';
import counter from './counter';


export default (state, action) => ({
  counter: counter(state.counter, action, state),
  router: routerReducer(state.router, action, state),
});
