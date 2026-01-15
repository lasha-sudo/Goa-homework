
import './App.css'

function App() {
 

  return (
    <div >
      
      <div className='w-70 h-70 flex justify-center items-center bg-red-600 hover:bg-sky-600 duration-700'>content 1</div>
      <div className='w-70 h-70 flex justify-center items-center bg-green-600 active:rounded-full'>content 2</div>
      <btn className='w-70 h-70 flex justify-center items-center bg-yellow-600 focus:bg-blue-100'>content 3</btn>
      <div className='w-70 h-70 flex justify-center items-center bg-green-600 '>content 2</div>

      <ul className='has-[li]:text-red-500 has-[li]:text-5xl'>
        <li >1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
   
  )
}

export default App
