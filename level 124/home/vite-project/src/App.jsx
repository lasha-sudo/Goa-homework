
import './App.css'

function App() {

  let word = ''

  function click() {
      alert('tailwindcss is best');
      word += 'you made me appear :)'
    }

  return (
    // <div className='h-screen flex justify-center items-end flex-col'>
    //   <div>content1</div>
    //   <div>content2</div>
    //   <div>content3</div>
    //   <div>content3</div>
    //   <div>content5</div>
    // </div>

    <div className='h-screen flex items-center flex-col justify-center gap-15 bg-cyan-600'>
      <h1 className='text-3xl text-white font-mono italic'>Tailwindcss</h1>
      <p className='text-2xl text-amber-300 font-mono '>Tailwindcss is for typing less and it is much better </p>

      <button className='bg-yellow-400 rounded-[10px] text-white p-[10px]  ' onClick={click}>CLick me!</button>




      

      



    </div>




    //flex აძლევს ელემენტს იმის საშალებას რომ ის გადაადგილდეს flex მეთოდებით ესენია justify-content,aling-items , flex-direction justify content გადაადგილებს მას ჰორიზონტალურად aling-items გადაადგილებს ვერტიკალურად flex-direction ორ ღერძზე შეულია გადაადგილება
   
  )
}

export default App
