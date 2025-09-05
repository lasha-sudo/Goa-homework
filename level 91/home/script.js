//1
const baseIngredients = ['water', 'herb', 'crystal'];


let clone = [...baseIngredients];

let added = ['phoenix feather',...baseIngredients];

let merge = [...'moon dust'.split(' '),...'sun ray'.split( ' ')];

let enhanicetPotion = [...added,...merge];
console.log(enhanicetPotion);


//2
const dna = 'A|T|G|C|A|G';

let arr= [...dna.split('|').join('X')];


console.log(arr);


//3
const baseStats = { defense: 40, durability: 80 };
const enchantment = { durability: 100, magicResist: 25 };

let finalStats = {...baseStats,...enchantment,weight:10};



console.log(finalStats);

//4
const thoughts = ['idea1', 'idea2', 'idea3', 'idea4'];

let [a,b,...remaining] = thoughts;
console.log(a);
console.log(b);
console.log(remaining);

//5
const base = ['core', 'shell'];
let addedBase = [...base,'reactor'];

//6

let merged = [...base,...addedBase];
console.log(merged);
