import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=18

 let[counter,setCounter] = useState(18)
  const addValue = () => {
    
    if(counter<20)
    {
    counter=counter+1
    
    setCounter(counter)
    console.log("clicked",counter);
    }
    else
    {console.log("NO FURTHER EXECUTION ONLY UPTO 20");}

  }
  let[counter1,setCounter1] = useState(18)
  const decValue = () => {
    
   if(counter>0)
   { 
    counter=counter-1
    
    setCounter(counter)
    console.log("clicked",counter);
    
   }
   else
   {console.log("NO FURTHER EXECUTION ONLY UPTO 0");}
  }

  

  return (
    <> 
    <h1>Chai Aur React</h1>
    <h2>Practice of Hooks</h2>
    <h2>Counter Value:{counter}</h2>
<button onClick={addValue}>Add value{counter}</button>
<br />
<button onClick={decValue}>Decrease value{counter}</button>  
<p>ONE MORE COUNTER:{counter}</p>    
    </>
  )
}

export default App

