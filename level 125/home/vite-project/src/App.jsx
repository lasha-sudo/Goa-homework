
import './App.css'

function App() {
  //რესპონსივის ორი ტიპი გვაქ min და max
  //max დაწერის შემთხვევაში ელემენტს ექნება საწყისი სტილი მითითებული პიქსელის შემდეგ
  //min  დაწერის შემთხვევაში ელემენტს ექნება საწყისი სტილი მითითებული პიქსელამდე

  return (

    <div>

      <img className='max-[500px]:w-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wxJ0c-jC6VcDASO9aiDWD9zWAeJLKrS5gg&s" alt="" />
      <button className='w-15 h-15 bg-red-600 m-2.5 max-[500px]:bg-green-500'>click me</button>
      <p className='font-mono text-4xl max-[500px]:text-red-600 min-[700px]:text-2xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maiores quibusdam at officia eius! Impedit nobis debitis quas, commodi est odio illo, unde libero, nostrum repellendus ullam ad pariatur explicabo?</p>

      <a href="#" className='max-[500px]:text-5xl min-[500px]:text-green-600'>press</a>

      <div className='w-50 h-50 bg-amber-500 max-[500px]:bg-blue-500'></div>


      





    </div>
    
        
  )
}
export default App
