//1
let collectArgs = (...args) => {
    console.log(args)
};
collectArgs(1,6,9,'hi',false);

//2

let sumOfAll = (...sum) => {let summ = sum.filter(x=> typeof x ==='number').reduce((x,y) => x+y,0);
    console.log(summ)
}

sumOfAll(1,4,5,true,false,'Hello');

//3

let excludeFirst = (first, ...rest) => {
    console.log(first)
    console.log(rest)
};
excludeFirst(100,200,300,400);


//4
let logExceptLast = (...items)=>{
    items.pop()
    console.log(items);
};
logExceptLast(2,4,6,8);

//5
const array = [1, 2, 3, 4, 5];

let [f ,s,...all] =array;
let firstTwo = [f,s];
let rest = all;
console.log('-------------------------')
console.log(firstTwo);
console.log(rest);

//6
const user = { name: "Davit", age: 25, role: "admin", active: true };

let {name,age , ...infos} = user;
let firstTwoInfo = {name,age};
console.log(firstTwoInfo);
console.log(infos);

//7

let filterOut = (target, ...values) => {
    switch(target) {
        case 'programmer':
            console.log( `programmer ${values}`);
            break;
        case 'web design':
            console.log(`wow you chose web ${values}`);
            break;
        
    };
};
filterOut('programmer',1200, 892);

//8
let classLogger = (target, ...values) => {
    console.log(`${target} : ${values}`)
};
classLogger('my message is' , true , 56, 4529);

//9
const data = [1, [2, 3, 4], 5];

let [a,...restAll] = data;
let [[e,b,c]] = restAll;
console.log(b , c);

//10
let  flatten= (...args) => {
    console.log(args)
};
flatten([2,3,5,7] , 10)
