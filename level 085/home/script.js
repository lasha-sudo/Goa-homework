let user = [
    {name: 'lasha' , id: 6},
    {name: 'nika' , id: 8},
    {name: 'Gio' , id: 3},

];

let idwithTHree = user.find(i => i.id ==3);

console.log(idwithTHree);

//2

let colors = ['yellow' , 'green'  , 'blue'  , 'grey'];

colors.reverse();

console.log(colors);


//3


let prices = [3,56,78,1200,900];

let fromHigh = prices.sort((x,y) => y - x )

console.log(fromHigh);

//4

let string = 'hello';


let Strarr = Array.from(string);

console.log(Strarr);


console.log('--------------------------------------------------')


//5

let Arraynums = [1,4,6,8,45,];

let data = 'hello world';

console.log(Array.isArray(Arraynums));
console.log('-------------------------------------------------');
console.log(Array.isArray(data))


//6

let courses = [
    {id: "MA201",
    name: "Calculus",
    isActive: true,
    students: [
      { name: "Anna", grade: 90 },
      { name: "Leo", grade: 75 },
    ],
    capicity: 31
  },
  {id: "CS101",
    name: "intoprograming",
    isActive: false,
    students: [
      { name: "mandy", grade: 80 },
      { name: "Lana", grade: 75 },
    ],
    capicity: 37}


];


console.log(Array.isArray(courses));

let names = 'nika,toko,lasha';
let allStudentsNames = Array.from(names.split(','));
console.log(allStudentsNames);


let idandName = courses.forEach(i=> {
    console.log(`id is ${i.id} and course name is ${i.name}`);
});


let onlyCourseNames = courses.map(i => i.name);

console.log(onlyCourseNames);


let courseGrades = courses.map(i=> {
    
    let average = i.students.reduce((x,y)=> x + y.grade ,0)  ;
    let avgGrade = average / i.students.length;
    
    return{avarage: avgGrade,}

    
});
console.log(courseGrades)


let isActiveCourses = courses.filter(i => i.isActive);

console.log(isActiveCourses);

let CalculusID = courses.find(i => i.id == 'MA201');

console.log(CalculusID);


courses.forEach(i => {
    let foreach = i.students.every(i => i.grade > 70);
    if(foreach){
        console.log('Thruthy')
               
    }else{
        console.log('Falsy')
    }
});

let check = courses.some(i => i.capicity <30 );
console.log(check);

let reversed = [check].reverse();

console.log(reversed)
