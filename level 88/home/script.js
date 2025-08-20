//1 sololearn

//2

const person = { name: "Alice", age: 30, city: "New York" };

let {name,age } = person;
console.log(name);
console.log(age);

//3

const person2 = { namee: "Alice", age: 30, cityy: "New York" };
let {namee : usersname , cityy: userscity} = person2;






//4

const student = {
  name: "Bob",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    english: 92,
  },
};


let {grades: {math,science,english}} = student;
console.log(math);
console.log(science);
console.log(english);

//5

const numbers = [1, 2, 3, 4, 5];
let [a,b,c,d,e] = numbers;
let firstAndThird = [a ,b];
console.log(firstAndThird);

