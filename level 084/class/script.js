//1
let products = [
    {name: 'apple' , price: 5},
    {name: 'leptop' , price: 1100},
    {name: 'orange' , price: 6},
];
let productNames = products.map(product => product.name)
console.log(productNames);

let affordableProducts = products.filter(product => product.price < 100);
console.log(affordableProducts);

let totalPrice = products.reduce((x,y) => x + y.price , 0);
console.log(totalPrice);

let reversed = products.reduceRight((x,y) => x + '-' + y.name, '');
console.log(reversed)







