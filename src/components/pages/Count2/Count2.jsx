import { useState } from "react";

export const Count2 = () => {
  
    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if(count > 0) 
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

  return (
    <div>
      <h2>Count 2</h2>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
