//1


let year = Number(prompt("enter your year to test if its leap: "));

if (year % 4 ===0 & year % 400 ===0 ) {
    console.log('leap year');
    
} else{
    console.log('not leap year')
};


//2


const guests = ["Anna", "Lasha", "Giorgi"];


function randomizerPick(names) {
  const randomIndex = Math.floor(Math.random() * names.length);
  const chosenName = names[randomIndex];
  console.log(chosenName);
}

 
randomizerPick(guests);


//3
let num = Number(prompt('enter num: '))


if(num % 3 ===0 & num% 5===0) {
    console.log('fizzbuzz');
} else if(num%3===0) {
    console.log('fizz')
}else if (num%5===0) {
    console.log('buzz')
} else{
    alert('undifined')
};