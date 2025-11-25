//1 sololearn

//2
let paragrah1 = document.createElement('p');
paragrah1.textContent = 'paragrah1' ;
document.body.append(paragrah1);

//3
let h2 = document.createElement('h2');
h2.textContent = 'subheading'
document.body.append(h2);
h2.textContent = 'updated subhead';


//4
let div1 = document.createElement('div');
div1.textContent = 'This is div';
document.body.append(div1) ; 

document.body.removeChild(div1);

//5


let ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.textContent = "Item 1";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "Item 2";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "Item 3";
ul.appendChild(li3);

document.body.appendChild(ul);

console.log( ul.firstElementChild.textContent);
console.log( ul.lastElementChild.textContent);

//6

let h3 = document.createElement('h3');
h3.textContent = 'inserted Heading';

let firselem = document.body.firstElementChild;

document.body.insertBefore(h3 , firselem);









//7

let span = document.createElement('span');
span.textContent = 'this is span';
document.body.append(span);

console.log(span.parentElement);

