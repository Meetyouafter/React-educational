import { ADD_PERSON, DELETE_PERSON } from '../types';

const initialState = {
  persons: [
    {id: 1, name: 'Anton'},
  ],
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return { ...state, persons: [ ...state.persons, action.payload] };
    case DELETE_PERSON:
      return {...state, persons: state.persons.filter((person) => person.id !== action.payload)}
    default:
      return state;
  }
};

const addPersonAction = (payload) => ({ type: ADD_PERSON, payload});
const removePersonAction = (payload) => ({ type: DELETE_PERSON, payload});

export default personReducer;
export { addPersonAction, removePersonAction };
