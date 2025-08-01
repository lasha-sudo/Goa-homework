//1
function checkType(i) {
    if(i > 0<i && i.lenght ==1   ) {
        console.log('primitive')
    }else{
        console.log('non primitive')
    }
};

checkType();

//2



function allFalsy() {
    if(6){
        console.log('it is Truthy')
        console.log('false')
        
    }else{
        console.log('it is Falsy');
        console.log('true')
    }
};

allFalsy();


//3
function removeFalsy(arr) {
    let result = [];
    for (let i of arr) {
        if (i) {
            result.push(i)
        }
    }
    return result
}

console.log(removeFalsy([0,1,'',null,true,false,'hello']))




//4
console.log('----')
function countTruthiesAndFalsies(arr) {
    let truthy = 0;
    let falsy = 0;

    for (let i of arr) {
        if (i) {
            truthy++;
        } else {
            falsy++;
        }
    }

    return { truthy, falsy }

}
console.log(countTruthiesAndFalsies([0,1,'',null,true,false,'hello']))


//5
let a = "hello";
let b = a;
b = "world";

console.log(a); // helloo რადგან a არ შეცვლილა
console.log(b); // world რადგან თავდაპირველად იყო ჰელლო და შემდეგ გახდა world

let x = { name: "Janeza" };
let y = x;
y.name = "Master";

console.log(x.name); // მასტერს რადგან y გადავეცით x ხოლო y.name  შეიცვალა x მნიშვნელობაც
console.log(y.name); // მასტერს რადგან შევცვალეთ

//6

const arr = ["JS", "React", "Node"];

console.log("Using for...in:");
for (let key in arr) {
  console.log(key); //როცა ფორ ინ ვიყენებთ მასივზე აბრუნებს ინდექსებს
}

console.log("Using for...of:");
for (let value of arr) {
  console.log(value); //გამოიტანს ყველა მასივის მნიშვნელობას
}


//7

let object = {
    name: 'lasha',
    age: 14,
};

let aray = [1,3,true,'kiwi'];

console.log('use for in..');

for(let i in object) {
    console.log(i)
};

console.log('use for of..');

for(let i of aray) {
    console.log(i)
}