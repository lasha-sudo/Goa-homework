
import './App.css'

function App() {
  

  return (
    <div>
      <div className='w-20 h-20 justify-center items-center bg-sky-500 hover:w-80 duration-700' >content 1</div>
      <div className='w-20 h-20 justify-center items-center bg-red-500 active:w-100 duration-700'>content 2</div>
      <input type="gmail" className='focus:border-amber-400 focus:border-4 ' placeholder='enter text' required />



      <ul className='has-[li]:text-5xl has-[li]:text-green-600'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>

      <p className='text-red-600 selection:bg-green-300 selection:text-green-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi porro libero ex praesentium adipisci dolorum quaerat nesciunt dignissimos quos. Eaque pariatur amet consectetur similique officia voluptates fuga dolorem perspiciatis doloribus?</p>
    </div>


  )
}

export default App
