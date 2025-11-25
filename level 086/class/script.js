//1
let basic = {
    cardio: 1000,
    pushups: 23,
    lifts: 10

};

let advanced = {
    legPullUps: 50,
    press: 100,
    legRaises: 100
};


let total = Object.assign(basic , advanced);
console.log(total);