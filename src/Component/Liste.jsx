import React from 'react';

function Programing_list() {
  const progr = ['C++', 'Java', 'Python', 'JavaScript', 'HTML'];
  const numb=[1,2,3,4];

  return (
    <div>
      <h1>Programming Languages</h1>
      <ul>
        {progr.map((name, index) => (<li type="circle" key={index}>{name}</li> ))}
 {numb.map((natural,index)=>(<li key={index}>{natural}</li>))}
      </ul>
     
    </div>
  );
}

export default Programing_list;
