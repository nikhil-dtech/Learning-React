import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let   [counter, setCounter] = useState(0);

const addValue = () => {
  counter++;
  //console.log('Add Value',counter);
  setCounter(counter); 
}

const removeValue = () => {
  counter--;
  if(counter <0){
    counter = 0;
  }
  //console.log('Remove Value',counter);
  setCounter(counter); 
}

  return (
    <>
     <h1>Chai aur Code</h1>
     <h2>Counter Clock : {counter}</h2>
     <button
     onClick={addValue}
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
