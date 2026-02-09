 import React from 'react'
const FullName = (props) => {
    return (
         <div><h1>{props.name} Flaming{props.age}</h1>
       {props.children}</div>
   );
}
export default FullName;// this is functional component use export at the end 

// import React,{Component} from "react";
// export default class propps extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.name}Alexander</h1>
//             </div>
//         );
//     }
// }