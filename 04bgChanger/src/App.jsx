import { useState } from 'react'

function App() {
  const [color, setColor] = useState('white');

  return (
    <div className='w-full h-screen duration-200'
    style={{
      backgroundColor: color
    }}>
      <div className='flex flex-col items-center text-amber-950 justify-center h-screen'>
        <h2 className='text-bold font-bold text-4xl'>This is {color} colored Web-Page</h2>
        <br />
        <br />
        <h2 className='text-bold font-bold text-4xl'>Click the button below to change the Color of Web-Page</h2>
        <br />
        <div className="w-0 h-0 border-l-20 border-r-20 border-l-transparent border-r-transparent border-t-40 border-t-brown-700 mx-auto mt-10"></div>
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
          style={{
            backgroundColor: "red"
          }}
          onClick={() => setColor('red')}
          >
            Red
          </button>
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
          style={{
            backgroundColor: "green"
          }}
          onClick={() => setColor('green')}
          >
            Green
          </button>
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
          style={{
            backgroundColor: "blue"
          }}
          onClick={() => setColor('blue')}  
          >
            Blue
          </button>
          <button
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer'
          style={{
            backgroundColor: "yellow"
          }}
          onClick={() => setColor('yellow')}  
          >
            Yellow
          </button>
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
          style={{
            backgroundColor: "purple"
          }}
          onClick={() => setColor('purple')}  
          >
            Purple
          </button>
          <button
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer'
          style={{
            backgroundColor: "orange"
          }}
          onClick={() => setColor('orange')}  
          >
            Orange
          </button>
          <button
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer'
          style={{
            backgroundColor: "pink"
          }}
          onClick={() => setColor('pink')}  
          >
            Pink
          </button>
          <button
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer'
          style={{
            backgroundColor: "gray"
          }}
          onClick={() => setColor('gray')}
          >
            Gray
          </button>
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
          style={{
            backgroundColor: "black"
          }}
          onClick={() => setColor('black')}  
          >
            Black
          </button>
          <button
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer'
          style={{
            backgroundColor: "violet"
          }}
          onClick={() => setColor('violet')}  
          >
            Violet
          </button>
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
          style={{
            backgroundColor: "gold"
          }}
          onClick={() => setColor('gold')}  
          >
            gold
          </button>
          <button
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer'
          style={{
            backgroundColor: "aquamarine"
          }}
          onClick={() => setColor('aquamarine')}  
          >
            aquamarine
          </button>
        </div>
      </div>
    </div>

  )
}

export default App
