
import './App.css'
import Items from './Items';

function App() {
  
  function Alert() {
    alert('your item has benn added on')
  };
  return <Items first="Egg" second='banana' third="cherry" fourth = 'water' onclick={Alert} />
    
  


}

export default App;