import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={username:"AMAN OJHA",
age:22,}

  return (
    <>
     <h1 class= "bg-green-500 text-black p-5 rounded-2xl mb-4">Props in React</h1>
   
<Card username="Chai Aur Code" />
<Card username="Chai Aur React" />

</> 
  )
}

export default App
