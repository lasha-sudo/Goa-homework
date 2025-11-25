//1
let info = {
    name: 'lasha',
    city: 'Tbilisi',
    age: 14,
};

let sent = () => {
    for(let i in info) {
        console.log(`${i} : ${info[i]}`)
    }
};

console.log(sent());

//2
let mon = {
    aplle: 3,
    tvix: 2,
    burger:20,
    fries:7
};

function sumOfProducts() {
    let sum = 0;
    for(let i in mon) {
        sum +=mon[i]
    };
    console.log(`your total is ${sum}`)
    
};

sumOfProducts();

//3

let combined= {
    name: 'lasha' , 
    num: 56,
    Bool: true,

};

function num() {
    let sum=0;
    for(let i in  combined) {
        if (typeof combined[i] == 'number' ) {
            sum +=combined[i];
        };
        console.log(sum);
    };
    
}
num();

//4
let books = {
    book1: 'author1',
    book2: 'author2',
    book3: 'author3',
};

function onlyBooks () {
    for(let i in books) {
        console.log(i)
    }
};

onlyBooks();

//5

let array = [3,4,5,6,8,34];

let sumOfArr = () =>{
    let sum =0;
    for(let i of array) {
        sum+=i

    };
    console.log(sum)
};
console.log(sumOfArr());

//6

let str = 'hello world';

let strFun = () => {
    for(let i of str) {
        console.log(i)
    }
};

console.log(strFun());


//7

let strArray = ['lasha' , 'hidro electro sadguri' , 'ki' , 'chia'];


function test() {
    
    for( let i of strArray) {
        if(i.length >= 5 ){
            console.log(i)

        }
    
    }
}

test();

//8

let numbers = [1,2,4,5,3,];

function doubled() {
    let doubled = []
    for(let i of numbers) {
        let x = i*i;
        doubled.push(x)

    }
    console.log(doubled)
}
doubled();


