//1
let x = [10,20,30];

let [a,b,c] = x;

console.log(a);  //10
console.log(b); //20
console.log(c); //30


let nestedArr = [100,200,300,[400,501]];

let [h,tw,th ,[f,fh]] = nestedArr;
console.log(h); //100
console.log(tw); //200
console.log(th); //300
console.log(f); //400
console.log(fh); //501


let fistNum = 30;
let secondNum = 10;

[fistNum , secondNum] = [secondNum , fistNum];

console.log(fistNum); //10
console.log(secondNum); //30



//2
let person = {
    name: 'lasha',
    age: 15
};

let {name , age} =person;

console.log(name); // 'lasha'
console.log(age); //15

let person2 = {
    userName: 'lasha',
    adress: {
        city: 'Tbilisi',
        enterence: 1
    }
};

let {userName , adress: {city , enterence}} = person2;
console.log(userName); // 'lasha'
console.log(city); // 'tbilisi'
console.log(enterence); // 1


let changeName = {
    saxeli: 'lasha',
    gvari: 'mekokishvili'
};

let {saxeli:chemiSaxeli , gvari: chemigvari} = changeName;

console.log(chemiSaxeli); // 'lasha'
console.log(chemigvari); // 'mekokishvili'


