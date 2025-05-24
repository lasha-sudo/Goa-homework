//1
let gender = prompt("enter your gender male or female:  ");
let age = Number(prompt("enter your age: "));
let income = Number(prompt("enter your income: "));

if(gender===female & income>5000) {
    console.log('თქვენი ფინანსური მგომარეობა უზრუნველყოფილია')
}
else if(3000<income<5000) {
    console.log("ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.")
}
else{
    console.log('გჭირდებათ ფინანსური გეგმის გაუმჯობესება')
};


if(gender===female & income>6000) {
    console.log( "თქვენ მზად ხართ ინვესტიციებისთვის!")
}
else if(4000<income<6000) {
    console.log("შემოსავალი სტაბილურია")
}
else if (age<18) {
    console.log("მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია")
}
else {
    console.log('გჭირდებათ ფინანსური გეგმის გაუმჯობესება')
}
//2
//sololearn

//3
let AGe = Number(prompt("enter your age: "));
if (AGe<=19) {
    console.log("take your kindle")
}



//4
let color = prompt("enter your colour: ");

if (color=="red") {
    console.log("1")
}
else if (color =="green") {
    console.log("2")
}
else if (color =="black") {
    console.log("3")
}
else {
    console.log("UNknown")
};

//5

let pickNumber = Number(prompt("enter your number: "));

if (pickNumber % 2 == 0) {
    console.log("even")
}
else {
    console.log("odd")

}
//6
let Celsius = Number(prompt("enter celsius: "));
if (50<Celsius>150){
    console.log("Moderate")
}

else if (Celsius>150) {
    console.log( "cold")
}
else{
    console.log("hot")
};





//7
let GRade = Number(prompt("enter your grade 0-100: "))

if(90 <= GRade >= 100) {
    console.log("A")}
else if(80 <= GRade >= 89) {
    console.log("B")
}else if(70 <= GRade >= 79) {
    console.log("C")
}else if(60 <= GRade >= 69) {
    console.log("D")
} else{
    console.log("F")
};