import React from 'react'

function Inline() {
    const heading={
        color:'red',
        backgroundColor:'black',
        fontSize:'60px'
    }
  return (
    <div> <h1 style={heading}>This is inline component</h1></div>
  )
}

export default Inline;