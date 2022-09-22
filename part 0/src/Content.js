import React from 'react';
import Part from './Part';

const Content =(prop) =>{


  return (
    <div>
        
        <Part part= {prop.part[0].name} exercise={prop.part[0].exercises}/>
      
      
      <Part part= {prop.part[1].name} exercise={prop.part[1].exercises}/>
      
      
      <Part part= {prop.part[2].name} exercise={prop.part[2].exercises}/>
     
     
     </div>
  );
}

export default Content;
