
import './App.css'
import Film from './Film'
import Game from './Game'
import Sc from './Sc'
import Song from './Song'
import Workout from './Workout'

function App() {

  function Alert() {
    alert('your game has benn added on')
  };
  return(
    <div>
    
      <Game first="fn" second='clash' third="MC" fourth = 'Cs' onclick={Alert} />
      <Song music='first song' />
      <Song music='sec song'  />
      <Song music='3 song'  />
      <Song  music='ksi song' />
      <br />

      <Film movie="mr fansatic fox" />
      <Film movie="Truman show" />
      <Film movie="isle of dogs" />
      <Film movie="lorax" />

      <br />
      <Workout work="push up" />
      <Workout work="run" />
      <Workout work="strenght" />
      <Workout work="leg workout" />

      <br />

      <Sc quiz='whats Fe?' />
      <Sc quiz='whats Mg?' />
      <Sc quiz='whats O?' />
      <Sc quiz='whats H?' />
      
     </div>
  )
      
   
    
    
  
};

export default App;
