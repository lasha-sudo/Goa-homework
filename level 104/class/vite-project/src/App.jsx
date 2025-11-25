
import { use, useState } from 'react'
import './App.css'
import Home from './component/Home'


export default function App() {
  const [count,setcount] = useState(0)

  const path = window.location.pathname

 
  return(
    <div>
      
      <Home setcount={setcount} data='Hello'>
        {count}
      </Home>
    </div>
  )
}
