import "./App.css"
import Click from "./click";






export default function App() {
  
  


  const path = window.location.pathname;

  switch(path) {
    case "/click":
      return <Click />
  }

  

  
  
  return(
    <div>
      <Click data="Lasha"></Click>
      
      
    </div>
    
  )
}

