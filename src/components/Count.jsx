import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSomeAction, decrementAction, incrementAction } from '../store/reducers/counterReducer';

const Count = () => {
  const [value, setValue] = useState('');
  const count = useSelector(state => state.count.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Count is {count}</div>
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
      <button onClick={() => dispatch(decrementAction())}>Decrement</button>
      <input
        placeholder='White here'
        value={value}
        onChange={e => setValue(e.target.value)}
      ></input>
      <button onClick={() => dispatch(addSomeAction(Number(value)))}>Add some</button>
    </div>
  )
};

export default Count;
