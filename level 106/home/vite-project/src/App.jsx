import React from 'react'
import './App.css'
import { useState } from 'react'

export default function App() {

  const [selectColor, setSelectColor] = useState('black');
  const [time, setTime] = useState(new Date());
  const [heartRate, setHeartRate] = useState('Time');


  const curTime = () => {
    setTime(new Date());
  }



  setInterval(curTime, 1000);

  const rame = time.toLocaleTimeString('en-GB');




  return (
    <div>
      <header>
        <h2>amazon</h2>
      </header>
      <section className='container'>
        <div className='left'>
          <div className='watch'  style={{backgroundColor: selectColor}}>

            <p className='heart-rate' >{heartRate === 'Time'? rame : '89-BPM'}</p>
          </div>
        </div>
        <div className="right">
          <h1>FitBit 19 - The Smartest Watch</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolores  maiores exercitationem debitis, odio esse blanditiis.</p>
          <h3>Select Color</h3>
          <span className='black'></span>
          <span className='red'></span>
          <span className='lightblue'></span>
          <span className='pink'></span>
          <h3>Features</h3>
          <button  >Time</button>
          <button >HeartRate</button><br />
          <button>BUY NOW</button>
        </div>
      </section>

    </div>
  )
}