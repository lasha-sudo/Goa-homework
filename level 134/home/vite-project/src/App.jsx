import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [arr, setArr] = useState([])

  const array = ['jonh' , 'lasha ' , 'gio' , 'zura'];

  function add() {
    setCount(prev => prev +1)
  }

  function adding() {
    setArr(t => [t, ...array])
  }

  function remove(target) {
    setArr(prev => (
      prev.filter((item , index)=>{
        index !==target
      })
    ))
  }

  function callback() {
    add();
    add();
    add();
    add();
    add();

  }

  return (
    <div>

      <p>{count}</p>
      <button onClick={add}>+1</button>
      <button onClick={callback}>+5</button>
      

      <p onClick={remove}>{arr}</p>

      {array.map((x , i) => (
        <button key={i} onClick={adding}>{x}</button>
      ))}
      
    </div>
  )
}

export default App
