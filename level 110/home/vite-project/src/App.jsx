

import './App.css'


export default function App() {

 
  // class vs classname clasname გამოიყენება react  ხოლო class  ჰთმლში

  //self closing tags  ისეთი ელემენტები რომლებსაც გამხსენი ტაგი აქვსთ მარტო და იქვე უნდა დავხუროთ მაგ:<br />
  //curly braces საშუალებით ვებ გვერდზე შემოგვაქ შექმნილი ცვლადის იმფორმაცია
  //variebele atribute შექმნილი ობიქტის ცვლადები ცალკე ცვლადებში როცა გაგვაქ

  let h1 = 'hello';
  let name = 'Lasha';
  let age = 15;
  let lastName = 'mekokishivli';
  const birthday = 'august';

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
      <h1 className='h1'>header1</h1>
      <p className='p1'>p1</p>
      <button className='btn'>clock</button>

      <br />
      <hr />
      <input />
      <img  />

      <h1>{h1}</h1>

      <p>my name is {name} my last name is {lastName} i am {age} years old my birthday is in {birthday}</p>

      <p>my grades math:{math} english:{english} georgian:{georgian} georgraphy:{georgraphy} </p>





    </div>
  )
}

