import {combineReducers} from 'redux';
import {INCREASE, DECREASE} from './types';

// 原始默认state
const defaultState = {
  count: 5,
  factor: 1,
};

function counter(state = defaultState, action) {
  switch (action.type) {
    case INCREASE:
      return {...state, count: state.count + state.factor};
    case DECREASE:
      return {...state, count: state.count - state.factor};
    default:
      return state;
  }
}

export default combineReducers({
  counter,
});
