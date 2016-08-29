import reducer from '../reducers/counter';

const testState = (before, action, after) => {
  expect(reducer(before, action)).toEqual(after);
};

describe('Reducers', () => {
  it('Increments', () => {
    testState(
      {
        counter: 0,
      },
      {
        type: 'INCREMENT_COUNTER',
      },
      {
        counter: 1,
      }
    );
  });

  it('Decrements', () => {
    testState(
      {
        counter: 1,
      },
      {
        type: 'DECREMENT_COUNTER',
      },
      {
        counter: 0,
      }
    );
  });

  it('Doesn\'t decrement below 0', () => {
    testState(
      {
        counter: 0,
      },
      {
        type: 'DECREMENT_COUNTER',
      },
      {
        counter: 0,
      }
    );
  });
});
