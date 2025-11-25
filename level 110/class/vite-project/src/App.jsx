import './App.css'


export default function App() {

  const btn = <button className='btn'>click</button>
  let name = 'lasha';
  let lastName = 'mekokishvili';
  let age = 15;
  let city = 'tbilisi';
  let country = 'Georgia';

  let grades = {
    math: 'A',
    english: "b",
    georgraphy: 'f',
    Georgia: 'A+'
  };
  let math = grades.math;
  let english = grades.english;
  let georgraphy = grades.georgraphy;
  let georgian = grades.Georgia;

  return(
    <div>
      
      <h1 className='header1'>h1</h1>
      <p  className='p1'>paragrah</p>

      <h1>hello {name}</h1>
      <p>{lastName}</p>
      <h3>{age}</h3>
      <h4>{city}</h4>
      <p>my name is {name} my last name {lastName} my age: {age} i live in {city} {country}</p>

      <br />
      <hr />
      <img />
      <input />

    


        
   


      




      
    </div>
    
  )
}



