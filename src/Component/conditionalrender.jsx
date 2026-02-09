import React, { Component } from 'react'
//there are three different conditional render method in react 
 class Conditionalrender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             issubscriber:true,
        }
    }
    
  render() {
    //#1 use if else metod
    // if(this.state.issubscriber){
    //   return (
    //   <div>
    //     <h1>Subscribed</h1>
      
    //  </div>
    // );  
    // }
    // else {
    //      return (
    //   <div>
    //     <h1>Subscribe</h1>
      
    //  </div>
    // ); 
    // }

    //#2 ternary  operator methode
    // return(
    //     this.state.issubscriber?
    //     <div><h1>Subscribed</h1></div>://for true condition
    //     <div><h1>Subscribe</h1></div>// or false condition
    // )

    //3.Logical&&  this not recommentded becaause itis not work for  false conditio happen
    return(
        this.state.issubscriber && (<div><h1>Subscribe</h1></div>)
    )
    
    // return (
    //   <div>
    //     <h1>Subscribed</h1>
    //     <h1>Subscribe</h1>
    //   </div>
    // );
  }
}

export default Conditionalrender;