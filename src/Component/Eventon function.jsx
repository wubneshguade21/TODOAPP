import React from 'react'

function Event_handle() {
    function Handler(){
        //console.log("Clicked");
        alert("Click on function");
    }
  return (
    <div>
        <button onClick={Handler}>Click Me!</button>
    </div>
  );
}

export default Event_handle;