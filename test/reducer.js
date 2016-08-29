import reducer from './src/js/reducers/counter';

describe('Tests', () => {
  it('increments', () => {

    const state = {
      counter: 0,
    };

    const action = {
      type: 'INCREMENT_COUNTER',
    };

    expect(reducer(state, action)).toEqual({ counter: 1 });
  });
});
