//1
let user = [
    {name: 'lasha',email:'lasha@gmail.com'},
    {name: 'nika',email:'nika@gmail.com'},
];

let emails = user.map(i=> {
    console.log('e.g', i.email)
});
console.log('-----------------------------------------------------');

//2

let num = [1,2,5,6,8,12,10];

let filtered = num.filter(i => i % 2===0);

let squaresOfEven  = filtered.map(x => x*x);
console.log(squaresOfEven);

console.log('-----------------------------------------------------');

//3

let product = [
    {name: 'apple' , price: 4},
    {name: 'laptop' , price: 1004},
];

let total = product.reduce((x,y) => x + y.price , 0);

console.log(total);

console.log('-----------------------------------------------------');


//4

let words = ['morning' , 'good' , 'world' , 'hello'];

let sentReversed = words.reduceRight( (x,y) =>  x + " " +  y , );


console.log(sentReversed);

console.log('-----------------------------------------------------');

//5

let students = [
    {id: 4564, name: 'jeremy' , grade: {math: 89 , science: 97 , history: 76} , atendence: true , extracurricular: ['sport' , 'best teach']},
    {id: 2364, name: 'jordan' , grade: {math: 69 , science: 77 , history: 86} , atendence: false , extracurricular: ['clening' , 'best clothes']}
];

let greet = students.forEach(i => {
    console.log(`hello ${i.name}`)
});

console.log('-----------------------------------------------------');


let names = students.map(i => i.name);
console.log(names);

console.log('-----------------------------------------------------');
let grade = students.map(student => {
    let val = Object.values(student.grade);
    let sum = val.reduce((x,y) => x + y, 0) / val.length;
    return {
        name: student.name,
        grade: Math.floor(sum),
    }
});

console.log(grade);



console.log('-----------------------------------------------------');

let filterGrade = grade.filter(student => {
    
    if(student.grade > 85){
        return{
            name: student.name,
            moreThan85: student.grade,
        }
    }
    
    

})
console.log(filterGrade)

console.log('-----------------------------------------------------');






let  strugglingStudents = students.filter(i => {
    let val = Object.values(i.grade);
    let some = val.some(score => score <70);
    return some

} )
console.log(strugglingStudents)


console.log('-----------------------------------------------------');

let totalExtracurical = students.reduce((x,y) => x + y.extracurricular.length , 0)
console.log(totalExtracurical)


console.log('-----------------------------------------------------');



console.log('-----------------------------------------------------');

let str = ['lasha' , 'nika' , 'gio'];

let reduce = str.reduceRight((x,y) => x + ' and ' +  y , );
console.log(reduce)

console.log('-----------------------------------------------------');

let chechk = students.every(i => i.atendence);
console.log(chechk)
console.log('-----------------------------------------------------');

let chechkSome = students.some(i => i.extracurricular.length ===0);
console.log(chechkSome);

console.log('-----------------------------------------------------');

