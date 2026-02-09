import React, { Component } from 'react'

 class EventOnClasses extends Component {
    Handler(){
       // console.log("Clicked")
       alert("this is event handler on class in react");
    }
  render() {
    return (
      <div>
        <button onClick={this.Handler}>CLICK HERE!</button>
      </div>
    );
  }
}

export default EventOnClasses;