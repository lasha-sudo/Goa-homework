//1
let sumNumbers = (...num) => {
    if(num.length>0) {
        let filtered = num.reduce((x,y) => x+y,0);
        console.log(filtered)
    }else{
        console.log(0);
    }
};

console.log(sumNumbers());