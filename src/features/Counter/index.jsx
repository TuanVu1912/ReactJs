import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

function CounterFeature(props) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const handleIncreseClick = () => {
    const action = increase(); //action creator
    dispatch(action);
  };
  const handleDecreseClick = () => {
    const action = decrease(); //action creator
    dispatch(action);
  };
  return (
    <div>
      Counter: {counter}
      <br />
      <button onClick={handleIncreseClick}>Increase</button>
      <button onClick={handleDecreseClick}>DEcrease</button>
    </div>
  );
}

export default CounterFeature;
