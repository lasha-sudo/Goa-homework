//1 sololearn

//2
let fruits = ['banana' , 'cherry' , 'apple'];

console.log(fruits.length);


//3


let name = ['lasha' , 'nugzari'];
let lastName = ['Mekokishvili' , 'wiklauri'];

let fullName = name.concat(lastName);

console.log(fullName);

//4

let countries = ['georgia' , 'spain' , 'italy'];

countries.push('germany')

console.log(countries);

//5

let city = ['Tbilisi' , 'barca' , 'madrid']

let removed = city.pop();
console.log(removed);


//6

let food = ['pizza' , 'burger'] ; 
let drink = ['cola' , 'water'] ;

let combined = food.concat(drink);

combined.push('pepsi') ;

console.log(combined);

//7

let num = [1 , 9 , 10 , 12]

for(let i = 0; i< num.length; i++ ) {
    if (num[i] > 5) {
        console.log(num[i]);
    };
};



