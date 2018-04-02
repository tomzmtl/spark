export default (state, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state + 1;

    case 'DECREMENT_COUNTER':
      if (state === 0) {
        return state;
      }

      return state - 1;

    default:
      return state;
  }
};
