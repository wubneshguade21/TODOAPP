import React, { useState } from 'react'
// useState in previous state as current 
function UseStatecounter2() {
    const initialvalue=0;
   const [count,countupdater]= useState(initialvalue)
  return (
    <div>
        Count:{count}
        <button onClick={()=>countupdater(initialvalue)}>Reset</button>
        <button onClick={()=>countupdater(count+1)}>Increase</button>
        <button onClick={()=>countupdater(count-1)}>Decrease</button>
    </div>
  );
}

export default UseStatecounter2;