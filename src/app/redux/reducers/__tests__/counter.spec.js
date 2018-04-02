import { expect } from 'chai';
import reducer from '../counter';

const testState = (before, actionType, after) => {
  const action = { type: actionType };
  return reducer(before, action) === after;
};

describe('Reducers', () => {
  it('Increments', () => {
    expect(testState(0, 'INCREMENT_COUNTER', 1)).to.equal(true);
  });

  it('Decrements', () => {
    expect(testState(1, 'DECREMENT_COUNTER', 0)).to.equal(true);
  });

  it('Doesn\'t decrement below 0', () => {
    expect(testState(0, 'DECREMENT_COUNTER', 0)).to.equal(true);
  });
});
