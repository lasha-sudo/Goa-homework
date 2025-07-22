//1
let scores = [69,78,89,76,67]

function check () {
    let sum = 0;

    for(let i of scores) {
        sum += i
        
    };
    let grade = sum / scores.length;
    console.log(`your grade is ${grade}`);
};

check();


//2
let car = {
    name: "BMW",
    model: 'M3',
    color: 'black',
};

function info() {
    for(let i in car ) {
        console.log(`${i} : ${car[i]}`)
        
        

    };

};

info();