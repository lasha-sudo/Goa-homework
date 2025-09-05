//1
class Person{
    constructor(name,age,hasJob) {
        this.name = name;
        this.age =age;
        this.job = hasJob
    }

    info() {
        console.log(`my name is ${this.name} my age is ${this.age} do i have job-${this.job}`)
    }
};

let p1 = new Person('lasha','mekokishvili' , true);

console.log(p1.info());


//2

class Base{
    constructor(name,rank) {
        this.name = name,
        this.rank =rank
    }

    info() {
        console.log(`${this.name}: ${this.rank}`)
    }
};



class sub extends Base {
    constructor(name,rank,speacialty) {
        super(name,rank),
        this.speacialty = speacialty;
    };
    info2() {
        console.log(`your speaciality is ${this.speacialty}`)

    }

};

let b1 = new sub('lasha' , 2 , 'Footballer');

b1.info();
b1.info2();




