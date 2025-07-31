let headingOne = document.getElementById('header1');

let count = 0;

function plus() {
    for(let i = 0; i < 1 ; i++){
        
        count++
        headingOne.textContent = count;
        if(count>0){
            headingOne.style.color = 'green';
        }
    };
};


function minus() {
    for(let i = 0;i<1;i++){
        count--;
        headingOne.textContent = count;
        if(count<0){
            headingOne.style.color = 'red';
        }
    }
};



function res() {
    count =0;    
    headingOne.textContent = count;
    headingOne.style.color = 'black';
};

