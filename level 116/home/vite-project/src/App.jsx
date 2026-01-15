
import './App.css'
import Counter from './Counter';
import Printer from './Printer';

function App() {
  let word = ''
  function alt() {
    for(let i =0;i<5000;i++) {
      word +='hello'
    }
    alert(word)
  }

  let nums = ''

  function math() {
    for(let i=0;i<100;i++) {
      nums += Math.random()
    }
    alert(nums)
  }

  let emoji =''
  
  function fire() {
    for(let i=0;i<3000;i++) {
      emoji += '🔥'
    }
    alert(emoji)
  }


  let wd = ''
  function react() {
    for(let i =0;i<1000;i++) {
      wd += 'react is fun'
    }
    alert(wd);
  }





  
  

  return (
    <>
      <Counter btn="+1"  />
      <Printer onclick={alt} onclick2={math} onclick3={fire} onclick4={react}  />

      
    </>
  )
}

export default App;
