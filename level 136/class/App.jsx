import { useEffect } from "react";
import { useState } from "react"


function App() {

  const [count , setCount] = useState(0);

  useEffect(
    console.log('count updated') , [count]  //useEffect გამოიყენება იმისთვის რომ ყოველ დარენდერებაზე გააკეთეს დავალება
  )

  return(
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <button onClick={()=> setCount(count-1)}>minus</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  )
}


export default App