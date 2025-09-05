//1
class Base {
    constructor(id,type) {
        this.id = id;
        this.type = type;
    }

    getLabel() {
        console.log(`your id is:${this.id} and type:${this.type} `)
    }
};


class sub extends Base{
    constructor(id,type,mutationlevel) {
        super(id,type);
        this.mutationlevel = mutationlevel
    };
    getLabel2() {
        console.log(`mutational level is ${this.mutationlevel}`)
    }

}


//2

class Vehicle {
    constructor(model,speed) {
        this.model = model;
        this.speed =speed;
    }

    getinfo() {
        console.log(`model is ${this.model} and speed is ${this.speed}`)
    }
};

class subvehicle extends Vehicle{
    constructor(model,speed,battery) {
        super(model,speed);
        this.battery = battery;
    }
    getinfo() {
        console.log(`battery is ${this.battery}`)
    }
}

let par = new subvehicle('lasha' , 'mvp' , 100);
par.getinfo();



class Agent{
    constructor(name,version) {
        this.name =name;
        this.version =version;
    }

    getstatus() {
        console.log(` ${this.name}  ${this.version}`)
    }
};

class subagent extends Agent{
    constructor(name,version,location) {
        super(name,version);
        this.location = location;
    }
    getstatus() {
        console.log(` ${this.location}`)
    }
}



class Dna{
    constructor(code,lenth) {
        this.code =code;
        this.lenth =lenth;
    }

    getsummary() {
        console.log(` ${this.code}  ${this.lenth}`)
    }
};

class subdna extends Dna{
    constructor(code,lenth,mutationtype) {
        super(code,lenth);
        this.mutationtypen = mutationtype;
    }
    getsummary() {
        console.log(` ${this.mutationtype}`)
    }
}


