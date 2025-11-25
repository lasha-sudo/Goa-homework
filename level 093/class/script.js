//1
class Book{
    constructor(title,author,isAvailable) {
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable
    };

    borrow() {
        if(this.isAvailable) {
            console.log(`you borrowed ${this.title}`)
        }else{
            console.log(`sorry ${this.title} is not available`)
        }
    }
};

let book = new Book('little prince' , 'george orwell' , true);
book.borrow();

//2

let map = new Map([[ 'k1' , 'lomi'], ['k2','vefxvi' ] , ['k3' , 'mgeli'], ['k4','wiwila' ] , ['k5' , 'kurdgeli' ]]);


console.log(map.size);

for(let i of map.entries()) {
    
    console.log(i)
};

console.log(map.has('k3'));


//3

let set = new Set([1,1,1,1,1,1,1,1,1,1,,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,]);
console.log(set)

