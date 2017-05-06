import { expect } from 'chai';
import reducer from '../reducer';

const testState = (before, actionType, after) => {
  const state = { counter: before };
  const action = { type: actionType };
  return reducer(state, action).counter === after;
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
