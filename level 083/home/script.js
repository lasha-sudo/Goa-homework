//1
let arr = [2,4,7,8,12];

let allEven = arr.every(num => num %2 ===0);

console.log(allEven);


//2
let arrOfMix = [3,'cat' , true , 'banana' , 87];

let Check = arrOfMix.some(str => str.length >5);


console.log(Check);


//3

let nums = [3,4,2,5];

let doubled = []
let doubledNums = nums.forEach(num =>
    doubled.push(num*num)
    
);

console.log(doubled);


//4

let arrOfObject = [
    {
        name: 'lasha',
        age: 14,
    }
];

let checkAge = arrOfObject.every(obj => obj.age > 18);

console.log(checkAge);



//5
let foodArrOfObject = [
    {
        price: 23,
        price: 24,
        price: 33,
        price:55
    }
];

let check = foodArrOfObject.every(food => food.price >20)

console.log(check)


//6

let shipingArrOfObject = [
    {
        oderid: 347757,
        custumerid: 78463,
        items: [{
            book1: 'wripa bijis dgiuri ', price: 30,
            book2: 'harry poter 3',price: 15,
            book3: 'harry poter 2', price: 13
        }],
        title: 'dgiuri',
        quantity: 5,
        shipingadress: 'batumi street',
        isDelevired: false
    }
];

//6     1
let checkItem = shipingArrOfObject.every(itm => itm.items.length > 0 )
console.log(checkItem);
//6     2
let checkDel = shipingArrOfObject.some(del => del.isDelevired);
console.log(checkDel);
//6      3
let proces = shipingArrOfObject.forEach(id => 
    
    console.log(`you orderid is ${id.oderid}`)

);

//6      4



 let quantity = shipingArrOfObject.forEach(i =>{
    
    console.log(`${i.title} ,quantity: ${i.quantity}`)}
);



//6      5

let checkOrder = shipingArrOfObject.forEach(i => {
    shipingArrOfObject.every(l => 
        l.items > 20
    )
});
console.log(checkOrder)

//6     6
let checkquanty = shipingArrOfObject.forEach(i => {
    shipingArrOfObject.every(l => 
        l.quantity > 1
    )
});
console.log(checkquanty)










