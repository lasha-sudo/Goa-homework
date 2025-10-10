import "./App.css"
import sunimg from "./assets/images/icon-sunny.webp"




export default function App() {
  return(
    <div className="div">
      <h2>How the sky looking today?</h2>

      <div className="children">
        <p className="p1">berlin,Germany <br /> tuesday,aug5,2025</p>
        
        <img className="img1" src={sunimg} alt="" width="200px"/>
        <h1 className="head1">20</h1>
      </div>

      <ul>
        <li><h4>feels like</h4> <br /> <p>18</p></li>
        <li><h4>humidity</h4> <br /> <p>46%</p></li>
        <li><h4>wind</h4> <br /> <p>14km/h</p></li>
        <li><h4>precipition</h4> <br /> <p>0mm</p></li>
      </ul>
    </div>
  )
}
