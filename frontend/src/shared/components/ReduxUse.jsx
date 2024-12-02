import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { increment, decrement, setValue } from '../redux/slices/exampleSlice';

const MyComponent = () => {
  const value = useSelector((state) => state.example.value);
  return <div>Value: {value}</div>;
};

const MyComponent = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(setValue(10))}>Set Value</button>
    </div>
  );
};
