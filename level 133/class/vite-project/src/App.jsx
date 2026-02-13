import { useState } from 'react'
import './App.css'

function App() {

  const [count,setCount] = useState(0);

  const increase = () => setCount(prevCount => prevCount + 1) //უსაფრთხო გზა
  
  const dicrease = () => setCount(prevCount => prevCount - 1)
    

  return (
    <div>
      <p>you presed button {count}  times</p>
      <button onClick={increase}>click</button>
      <button onClick={dicrease}>click if you missclicked</button>
    </div>
    
  )
}

export default App
