import React, { Component } from 'react'
 class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Username:'',
            Comment:'',
            Password:'',
            Tetorial:''
             
        }
    }
//event handler in react 
    
    Usernamehandler=(event)=>{
        this.setState({
            Username:event.target.value
            
        })

    }
    Commenthandler=(event)=>{
        this.setState({
            Comment:event.target.value
        })
    }
    Passwordhandler=(event)=>{
        this.setState({
            Password:event.target.value
        })
    }
    Tetorialhandler=(event)=>{
        this.setState({
            Tetorial:event.target.value
        })
    }
    Submithandler=(event)=>{
        alert(`${this.state.Username}${this.state.Comment}${this.state.Password}${this.state.Tetorial}`)
    }
  render() {
    return (
      <form onSubmit={this.Submithandler}>
        <div>
            <label>Username:</label>
            <input type="text" value={this.state.Username} onChange={this.Usernamehandler}/>
        </div>
        <div>
            <label>Comment:</label>
            <textarea value={this.state.Comment} on onChange={this.Commenthandler}/>
        </div>
        <div>
            <label>password:</label>
            <input type="password" placeholder='password' value={this.state.Password} onChange={this.Passwordhandler}/>
        </div>
        <div>
            <lable>Tetorial:</lable>
                <select value={this.state.Tetorial} onChange={this.Tetorialhandler}>
                    <option value="javascript">javascript</option>
                  <option value="html">html</option>
                  <option value="c++">c++</option>
                </select>
            
        </div>
        <button type='Submit'>Submit</button>
      </form>
    );
  };
}

export default Form