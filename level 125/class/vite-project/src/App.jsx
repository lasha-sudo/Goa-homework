import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <img className='max-[700px]:w-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wxJ0c-jC6VcDASO9aiDWD9zWAeJLKrS5gg&s" alt="" />
      <button className='w-15 h-15 bg-red-700 m-2.5 max-[700px]:bg-green-500'>click me</button>
      <p className='font-mono text-4xl max-[700px]:text-red-600 min-[700px]:text-2xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maiores quibusdam at officia eius! Impedit nobis debitis quas, commodi est odio illo, unde libero, nostrum repellendus ullam ad pariatur explicabo?</p>






    </div>
      
  )
}

export default App
