let academy = {
    name: 'Goa' , 
    courses: 'programming' , 
    sociallink: 'lorem' , 

};

let academyRewiev = {
    person1: 10,
    person2: 9,
    person3: 10,
};


let person1 = {
    name: 'Grisha' , 
    status: 'parent',
    reviev: 'very good academy 10/10'
};

let person2 = {
    name: 'nika' , 
    status: 'child',
    reviev: 'very good academy 9/10'
};

let person3 = {
    name: 'Salome' , 
    status: 'parent',
    reviev: 'very good academy 10/10'
};

let personsTviseba = Object.assign(person1 , person2 , person3);
console.log(personsTviseba);

let personsList = Object.entries(person1 , person2 , person3);
console.log(personsList);

let personsobjectList = Object.keys(person1 , person2 , person3);
console.log(personsobjectList);

let personsCheck = Object.values(person1 , person2 , person3);
console.log(personsCheck);

Object.freeze(person1,person2,person3); 

let personisfrozen = Object.isFrozen(person1,person2,person3);

console.log(personisfrozen);











