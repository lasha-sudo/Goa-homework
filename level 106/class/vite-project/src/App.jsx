import { useState } from "react"
import "./App.css"



export default function App() {
  
  const [word,setword] = useState('Hello world');

  const show = () => {
    setword("Hello world")
  }

  const hide = () => {
    setword()
  }

  return(
    <div>
      <h1>{word}</h1>
      <button onClick={show}>show</button>
      <button onClick={hide}> hide</button>

    </div>
  )
}