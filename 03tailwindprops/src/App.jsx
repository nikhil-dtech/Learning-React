import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "John",
    age: 30,
    city: "New York"
  }

  return (
    <>
    <h1 className='bg-amber-200 text-black'>Vite + React</h1>
    <Card userName="NikhilDhakad" />
    <Card userName="NikhilGoyal " />
    </>
  )
}

export default App
