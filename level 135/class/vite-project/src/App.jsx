import React,{ useState } from 'react';
import './App.css'

function App() {
  const [items, setItems] = useState([]);

  let list = ['banana' , 'cherry' , 'apple' , 'vannila']

  function additem(item) { 
    setItems(prev => {
        return [prev,...item]   
    })

}



  return (
    <div>
      {list.map((x , i)=> {
        <button onClick={additem} key={i}>{x} item</button>
      })}

            


    </div>
  )
}

export default App
