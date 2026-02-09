import React, { useState } from 'react'

function UseStateWithObject() {
    const[name,setName]=useState({FName:'',LName:''})
  return (
    <div>
        <input type="text" value={name.FName} onChange={e=>setName({...name,FName:e.target.value})}/>
        <input type="text" value={name.LName}onChange={e=>setName({...name,LName:e.target.value})}/>
         <h1>Your First Name is:{name.FName}</h1>
          <h1>Your Father Name is:{name.LName}</h1>
    </div>
  )
}

export default UseStateWithObject;