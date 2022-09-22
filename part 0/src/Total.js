import React from 'react';

const Total =(prop)=> {


  return (
    <>
         <p>Number of exercises {prop.part[0].exercises+prop.part[1].exercises+prop.part[2].exercises}</p>
     
     </>
  );
}

export default Total
