//1

let numsArray = [1 , 4, 17 , 19] ;

let strArray = ['mango' , 'hello' , 'drink'] ;

let combinedArray = numsArray.concat(strArray) ;

combinedArray.copyWithin(4 , 0 , 3) ;

combinedArray.fill('filled' , 2 , 4);

combinedArray.pop();

combinedArray.shift();

combinedArray.unshift(100 , 200);

//2
let people = ['lasha' , 'nupo', 'gio'];
let places = ['georgia' , 'scotland' , 'indonesia'];

let mergedArray = people.concat(places);

mergedArray.copyWithin(2, 0,2);

mergedArray.fill({city: 'new york'}, 4 , 6);

mergedArray.pop();

mergedArray.shift();

mergedArray.unshift({name: 'charlie'} , {name: 'david'});

//3

let mixedArray = ['pinaple' , 'coke'  , 2];

let array = [true , false];

let extendedArray = mixedArray.concat(array);

mixedArray.copyWithin(0,2,4);

mixedArray.fill(0,2,5);

mixedArray.pop();
mixedArray.shift();

mixedArray.unshift('null' , 'undefined');



