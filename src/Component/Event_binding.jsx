import React, { Component } from 'react'

 class Event_binding extends Component {
    constructor() {
        super()
    
        this.state = {
           msg:"SELAM" , 
        };
        this.Handler=this.Handler.bind(this);
    }
    Handler=()=>{
        this.setState({
            msg:"Good bye",
        });
    }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
       <button onClick={this.Handler}>Clicked!</button>
        
      </div>
    );
  }
}

export default Event_binding;