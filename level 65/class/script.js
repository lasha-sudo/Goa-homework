let info = {
    name: 'lasha',
    lastname: 'Mekokishvili' ,
    age: 14,
    country: 'Georgia' , 
    city: 'Tbilisi' , 
    gender: 'Male',
    personalinfo: function() {
        return `hello my name is ${this.name} ${this.lastname} i am ${this.age} years old i live in ${this.country} ${this.city} and my gender is ${this.gender}`
    }
};
this
console.log(info.personalinfo());


