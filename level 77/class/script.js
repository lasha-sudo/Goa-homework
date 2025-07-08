
//1
let div = document.querySelector('.div1');



function makeBig() {
    div.classList.add('big');
    div.classList.remove('small')

};

function makeSmall() {
    div.classList.add('small');
    div.classList.remove('big')
    

};

//2

let image = document.querySelector('img');

image.addEventListener('click' , ch )

function ch() {
    image.src = 'https://ik.imagekit.io/serenity/ByteofDev/Blog_Content_Images/tr:f-jpg/speed_up_images_original_R8oje17ew'
    image.style.width = '200px'
    image.style.height = '200px'

}








