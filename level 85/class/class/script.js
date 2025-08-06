//1
let mixedData = [10, "apple", 5, "banana", 20, "cherry"];

let firstString = mixedData.find(str => typeof str === 'string');
console.log(firstString);

let fruits = ["mango", "orange"];
let isFRuitsArr = Array.isArray(fruits);
console.log(isFRuitsArr);

let filtered = mixedData.filter(strs => typeof strs === "string");
let stringLengths = Array.from(filtered).length;
console.log(stringLengths);

let copyOfMixedArr = [10, "apple", 5, "banana", 20, "cherry"];
copyOfMixedArr.reverse();
console.log(copyOfMixedArr);


let nums = mixedData.filter(x => typeof x === 'number');
let onlyNumsFromMixedAArr = nums.sort((x,y) => x - y) ;
console.log(onlyNumsFromMixedAArr);