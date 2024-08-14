import React, { useState } from 'react';

function Count() {
 
 const [counter,setCounter] = useState(0);

 function  increment() {
     setCounter(counter + 1)
 }

 function decrement () {
  if (counter>0)
  setCounter(counter-1)
 }

 function reset () {
  setCounter(0)
 }

     return(
      <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>reset</button>
          <p>Count: {counter}</p>

      </div>
     )
}

export default Count;
