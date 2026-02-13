import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  

  

  const [value , setValue] = useState('')

  const [value2 , setValue2] = useState([])

  function type(event) {
    setValue(event.target.value)
  }

  function add() {
    setValue2(t=> [...t,value]);
    setValue('')
    
  }



  

  return (
    <div>

      <p>{count}</p>

      <button  onClick={() => setCount(count +1)}>+</button>
      <button onClick={() => setCount(count -1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>


      <p >{value}</p>


      <input type="text" placeholder='add mission' onChange={type} value={value}/>

      <button onClick={add}>add</button>

      <ul>
        {value2.map((x , i)=> {
          return <li key={i}>{x}</li>
        })}
      </ul>





      


      
    </div>
  )
}

export default App
