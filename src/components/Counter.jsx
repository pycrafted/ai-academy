import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = ({ initialValue = 0, label }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    setCount(initialValue);
  }, [initialValue]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="counter">
      {label && <h3>{label}</h3>}
      <div className="counter-controls">
        <button onClick={decrement}>-</button>
        <span className="count">{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;