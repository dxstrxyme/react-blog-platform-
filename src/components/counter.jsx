import React, { useState } from "react";

const Counter = function(){
    const [count,setCount] = useState(0);

    function inc (){
        setCount(count + 1)
      }
    
      function dc (){
        setCount(count - 1)
      }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>inc</button>
            <button onClick={dc}>dc</button>
        </div>
    )
}

export default Counter;