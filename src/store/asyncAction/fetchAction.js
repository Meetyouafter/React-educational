import { addManyPersonsAction } from "../reducers/nameReducer"

export const fetchAction = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addManyPersonsAction(json)))
  }
}