//1
let num  = 0;

for(let i = 0; i <10000;i++) {
    if(i*num>10000) {
        break;
    }
    num += i
};


//2

for(let x = 0 ; x<200;x++) {
    if(x===105){
        break;
    }
    else if(x%3===0) {
        continue;
    }
    console.log(x)
}
