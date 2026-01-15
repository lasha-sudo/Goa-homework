
import Recepi from './Recepi';
import Card from './Card';

function App() {
  

  return (
    
    <>
      {Recepi.map((x , i) => 
      <Card recipeObject={x} key={i}/>
      
      )}
    </>
     
  )
}

export default App
