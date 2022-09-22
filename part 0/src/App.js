import React from 'react';
import Total from './Total';
import Header from './Header';
import Content from './Content';


const App= ()=> {
  const course ={name: 'Half Stack application development',
   part :[ {
    name: 'Fundamentals of React',
    exercises: 10
  },
   {
    name: 'Using props to pass data',
    exercises: 7
  },
   {
    name: 'State of a component',
    exercises: 14
  }
  ]
}
  return (
    <div>
      <Header course={course.name} />
      <Content part={course.part} />
      <Total part={course.part} />
    </div>
  );
}

export default App;
