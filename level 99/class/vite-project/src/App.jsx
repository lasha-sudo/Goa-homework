





export default function App() {
  const name='Lasha';

  const handleClick = () => {
    console.log('hello world');
  };
  return(
    <div>
    <button onClick={handleClick}>click</button>
    
    <h1>Lasha</h1>
    <h1>{name}</h1>
    <img src="/assets/eve.jpg" alt="k2"/>

    
    </div>

  )
}
