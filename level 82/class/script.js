//1

const name = "MasterJaneza"; //არის პრიმიტიულია რადგან სტრინგია და სტრინგი პრიმიტიულია
const age = 29; //არის პრიმიტიული რადგან ინტეგერიც პრიმიტიულია
const skills = ["JavaScript", "React"]; //არ არის პრიმიტიული რადგან მასივი არ არის პრიმიტიული
const greet = function() { return "Hello!"; }; //არ არის პრიმიტიული რადგან ფუნქცია არ არის პრიმიტიული
const isCool = true; //არის პრიმიტიული რადგან ბულიანი პრიმიტიულია
const details = { country: "Georgia" }; //არ არის პრიმიტიული რადგან ობიქტები არ არის პრიმიტიული


//2

function isFalsy() {
    
    if(2){
        console.log('it is Truthy');
        console.log(false)
    } else{
        console.log('it is Falsy')
        console.log(true)
        
    };
};

isFalsy();


