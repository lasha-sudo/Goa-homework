let map = new Map([[ 'k1',5 ] , ['k2',true ] , [ 'k3' , 'mgeli' ] , [ 'k4' , 5.7 ] , [ 'k5' , false ]]);

//2
console.log(map.size);

//3

for(let i of map.entries()) {
    console.log(i)
};

//4

console.log(map.has('lasha'));

//5

let set = new Set([1,1,1,1,1,'lasha','lasha','lasha','lasha',5,5,5,5,5,5,5,5,]);
console.log(set)