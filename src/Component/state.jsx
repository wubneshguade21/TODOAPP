import React, { Component } from 'react'
class Subscribe extends Component {
    constructor() {
        super()
    
        this.state = {
             channel:"LIYORA TECH",
        };
    }
 changeMessage() {
        this.setState({
            channel:"THANKS FOR SUBSCRIBE"
        })
        
    }
  render() {
    return (
        <div>
      <h1>{this.state.channel}</h1>
      <button onClick={()=>this.changeMessage()}>SUBSCRIBE</button></div>
    );
  }
}

export default Subscribe