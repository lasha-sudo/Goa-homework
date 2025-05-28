//1
function flight(id,status) {
    this.id = id;
    this.status = status;
};

let user =  new flight(prompt("enter your id: "),prompt("enter your status: "));

console.log(user);

//2
let id = prompt("enter yout products id: ");
let price = prompt("enter yout products price: ");
let discount = 15;

function storeProduct(id , price) {
    this.id = id;
    this.price = price;

    this.NewPrice = function(discount) {
        let newprice = price - (price* discount /100)
    };
};

console.log(storeProduct.NewPrice())


