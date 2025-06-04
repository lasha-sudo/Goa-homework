//1 sololearn
//2
function person(name,age,profssion) {
    this.name = name,
    this.age = age , 
    this.profssion = profssion
};

let info = new person('lasha' , 14 , 'Programming');

console.log(`hello my name is ${info.name} i am ${info.age} years old and i am ${info.profssion}`);

//3

function book(title,year,author) {
    this.title = title,
    this.year = year , 
    this.author = author
};

let getSummary = new book('jfh' , 1980 , 'e.g');

console.log(getSummary.title);
console.log(getSummary.year);
console.log(getSummary.author);

//4

function user(name,email,password) {
    this.name = name,
    this.email = email, 
    this.pass = password
};

let Changepassword = prompt("enter new password: ");

let getdetails = new user(prompt("enter your name: ") ,prompt("enter your email: ") , Changepassword )

