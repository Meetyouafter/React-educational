import { ADD_SOME, DECREMENT, INCREMENT } from '../types';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count += 1 };
    case DECREMENT:
      return { ...state, count: state.count -= 1 };
    case ADD_SOME:
      return { ...state, count: state.count += action.payload };
    default:
      return state;
  }
};

const incrementAction = (payload) => ({ type: INCREMENT, payload});
const decrementAction = (payload) => ({ type: DECREMENT, payload});
const addSomeAction = (payload) => ({ type: ADD_SOME, payload});

export default counterReducer;
export { incrementAction, decrementAction, addSomeAction };
