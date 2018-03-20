import counter from './counter';


export default (state, action) => ({
  counter: counter(state.counter, action, state),
});
