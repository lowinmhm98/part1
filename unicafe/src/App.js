import { useState } from 'react'

const  StatisticLine = ({text,value}) =>{
return(<tr><td>{text}</td><td>{value}</td></tr>)
}

// a proper place to define a component
const Statistics = ({good,bad,neutral,positive,average}) => {
 return(
  <>
      
      
          <table>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="all" value ={good+bad+neutral} />
          <StatisticLine text="average" value ={average} />
          <StatisticLine text="positive" value ={positive +"%" } />
          </table>

        
      
      
    </>
 )
}


const Buttons = ({functions})=> {
  
 let [isGood,isBad,isNeutral]= functions
  return(
    <>
    <button onClick={isGood}>Good</button>
    <button onClick={isBad}>Bad</button>
    <button onClick={isNeutral}>Neutral</button>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average,setAverage] =useState(0)
  const [positive,setPositive] =useState(0)

  


  const isBad = ()=> {
    setBad(bad+1)
    
    setAverage(()=>{return((good-bad-1)/(good+bad+neutral+1))})
    setPositive((good)/(good+bad+neutral+1)*100)
    
  }
  const isGood = ()=> {
    setGood(good+1)
    
    setAverage(()=>{return((good+1-bad)/(good+bad+neutral+1))})
    setPositive((good+1)/(good+bad+neutral+1)*100)
   
    
  }
  const isNeutral = ()=> {
    setNeutral(neutral+1)
    setAverage(()=>{return((good-bad)/(good+bad+neutral+1))})
    setPositive((good)/(good+bad+neutral+1)*100)
  
    
  }
  
  

  return (
    <div>
      <h3>give feedback</h3>
       <Buttons functions={[isGood,isBad,isNeutral]}/>
      <h3>statistics</h3>
      {(good+bad+neutral===0)? <div>No feedback given</div>:<Statistics good={good} bad={bad} neutral={neutral} positive={positive} average={average}/>}
     
      
    </div>
  )
}
 
export default App


