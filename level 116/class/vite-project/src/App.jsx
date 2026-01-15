
import './App.css'
import Img from './Img';

function App() {

  

    function handleClick() {
      alert('Goa is The best')
    }

  return(
    <Img onclick={handleClick} />

  )
};

export default App;