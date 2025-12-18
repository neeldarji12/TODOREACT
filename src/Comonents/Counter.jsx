import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [state, setState] = useState(0);

  function inc() {
    setState(state + 1);
  }
  function dec() {
    setState(state - 1);
  }
  return (
    <div className="container">
       <h1>Counter is {state}</h1>
      <button onClick={(inc)} className="btn">Incriment</button> 
        <button onClick={dec} className="btn">Decrement</button>
      <button onClick={() => setState(0)} className="btn">Reset</button>

        {/* <h1>Name: {state.name}</h1>
        <h1>Email: {state.email}</h1> */}
      
    </div>
  );
}

export default Counter;
