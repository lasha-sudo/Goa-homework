
let name = 'lasha';
let lastName = 'Mekokishvili';

let info = {
    name,lastName
};
console.log(info);



console.log('--------------------');

let infoSEcond = {
    name:  name,
    lastName: lastName,
};
console.log(infoSEcond)
console.log('--------------------');

let str = 'Country';

let portugal = {
    [str] : 'Portugal',
    city: 'lisbon'
};
console.log(portugal)
console.log('--------------------')

let info3 ={
    name: name,
    lastName: lastName,
    full() {
        `your  name is ${this.name} , and last name is ${this.lastName} `

    }

};
info3.full();
console.log(info3);