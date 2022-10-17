import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="counter">
      <h3>{count}</h3>
      <button className="btn" onClick={increment}>Increment</button>
      <button className="btn" onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter;
