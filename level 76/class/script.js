//1
let createElem = document.createElement('button');

createElem.textContent = 'Click me!';

document.body.appendChild(createElem);



createElem.style.backgroundColor = 'red';
createElem.style.color = 'yellow' ; 

document.body.removeChild(createElem);

//2

let img = document.querySelector('img');

function prog() {
    img.src = 'https://t4.ftcdn.net/jpg/03/05/46/75/360_F_305467506_QczGkOYLChAeFpjsLrzFltFXwxunx0xE.jpg'
};

function gra() {
    img.src = 'https://media.istockphoto.com/id/1415537875/photo/asian-graphic-designer-working-in-office-artist-creative-designer-illustrator-graphic-skill.jpg?s=612x612&w=0&k=20&c=9ufB0QZ-LPcz14zLh909QEEbmDmcfIYzhBsST3hXbMs='
};

function mex() {
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQliodHAAPRrEECgFZXzZoLvT9qnAyRC4YSIQ&s'
};





