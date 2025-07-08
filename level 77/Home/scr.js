// 1 დავალებები

//1
let div = document.querySelector('div');

div.classList.add('highlight');

//2

div.classList.remove('highlight');

//3
let divi = document.querySelector('#targetdiv');

document.body.addEventListener('cliick' , di)

function di() {
    divi.classList.toggle('class')
    
};

//4

let para = document.querySelector('#checkp');


para.classList.add('important');

let check = para.classList.contains('important');

console.log(check)


//5

let div3 = document.querySelector('#replacediv');

div3.classList.add('red');

div3.classList.replace('red','blue');

console.log(div3);



//6

let itemDiv = document.querySelector('#itemdiv');


itemDiv.classList.add('class1');
itemDiv.classList.add('class2');
itemDiv.classList.add('class3');

let second = itemDiv.classList.item(1);

console.log(second)


//2

let ul = document.querySelector('ul');

let newItem = document.createElement('li');
newItem.textContent = 'item5'
ul.appendChild(newItem);

ul.removeChild(ul.firstChild);

ul.firstChild.textContent = 'changeditem' ; 

//3

let changeP = document.querySelector('#myparagrah');

changeP.textContent = 'new text content' ; 

//4
let div4 = document.querySelector('#styledDiv');



//5

let ul2 = document.querySelector('#mylist');

let li = document.createElement('li');

li.textContent = 'new list item' ; 

ul2.appendChild(li);

//6

let ul3 = document.querySelector('#removelist');

let li2 = document.querySelector('#li2');

ul3.removeChild(li2);


//7

let img = document.querySelector('img');

img.alt = 'updated image';

//10

let btnDiv = document.querySelector('.divbtn');

function cha () {
    btnDiv.style.backgroundcolor = 'red'
    


};

//11

let img = document.querySelector('.img');


function change() {
    img.src = 'https://burst.shopifycdn.com/photos/beach-sunset-thailand.jpg?width=1000&format=pjpg&exif=0&iptc=0'
};


//12


let h1 = document.querySelector('h1');

h1.style.display = 'none' ;

//13


let anser = document.querySelector('.answer');

let btn1wrong= document.querySelector('.wrong');

let btn2True= document.querySelector('.true');
 
if(btn2True) {
    anser.textContent = 'anwser is true' ; 
} else{
    anser.textContent = 'you wrong' ; 

}






