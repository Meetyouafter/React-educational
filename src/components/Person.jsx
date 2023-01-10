import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPersonAction, removePersonAction } from '../store/reducers/nameReducer';

const Person = () => {
  const [name, setName] = useState('');
  const persons = useSelector(state => state.persons.persons);
  const dispatch = useDispatch();

  const addPerson = (name) => {
    const newPerson = {
        id: Date.now(),
        name,
      };
    dispatch(addPersonAction(newPerson))
    setName('')
  };

  const removePerson = (person) => {
    dispatch(removePersonAction(person.id))
  }

  return (
    <div>
      <div>We have names:</div>
      {persons.map(person => <div
      key={person.id}
      onClick={() => dispatch(removePerson(person))}>{person.name}</div>)}
      <input
        placeholder='Add new name'
        value={name}
        onChange={e => setName(e.target.value)}
      ></input>
      <button onClick={() => addPerson(name)}>Add some</button>
    </div>
  )
};

export default Person;
