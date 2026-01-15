
import './App.css'
import Comp from './Comp';
import Greet from './Greet';
import Status from './Status';

function App() {

  function math() {
    return 5+45
  }
  

  return (
    <>
      <Greet name="lasha" message='hello lasha today is 2 december' age={15} />
      <Status status={false} />
      <Comp first="hello" s={[1,4,7,8,9,]}  f={78} fi={7.90} si="hello again" se={true} e={false} n={[8,9,0,0,0,0,0,0,0,0,] } te={math} />
    </>
    
  )
}

export default App;
