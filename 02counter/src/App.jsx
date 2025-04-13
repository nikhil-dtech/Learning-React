import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


//const counter = 5;
let   [counter, setCounter] = useState(0);

const abbValue = () => {
  counter++;
  console.log('Add Value',counter);
  setCounter(counter); 
}

const removeValue = () => {
  counter--;
  if(counter <0){
    counter = 0;
  }
  console.log('Remove Value',counter);
  setCounter(counter); 
}

  return (
    <>
     <h1>Chai aur Code</h1>
     <h2>Counter Clock : {counter}</h2>
     <button
     onClick={abbValue}
     >
      Add Value
     </button>
     <br />
     <button
     onClick = {removeValue}
     >
      Remove Value  
     </button>
    </>
  )
}

export default App
