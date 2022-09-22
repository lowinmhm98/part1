import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [clicked,setClicked] =useState(false)
  const [points,setPoint] = useState(Array(anecdotes.length).fill(0))
  const [max,setMax] = useState(0);
  const [winner,setWinner]= useState("To be decided")
  const selectAnecdote = ()=>{
        setClicked(true);
        setSelected(Math.floor(Math.random() * anecdotes.length))


  }
  const voteAnecdote = (id)=> {
      const copy =[...points];
      copy[id] +=1;
      setPoint(copy)
      setMax(Math.max(...copy))
      setWinner( anecdotes[copy.findIndex((elem)=>{return(elem===Math.max(...copy))})]);

  }

  return (
    <div>
       {clicked? <><p>{ anecdotes[selected]}</p><div>has {points[selected]} votes</div> <button onClick={()=>voteAnecdote(selected)}>vote</button></>:null}
      
      <button onClick={selectAnecdote}>{clicked? "next anectode": "Select anecdote"} </button>

      {clicked?<><h2>Anectode with most votes</h2><p>{winner}</p><div>has {max} votes</div></>:null}
      
    </div>
  )
}

export default App