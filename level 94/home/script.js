//1
function lomi() {
    console.log('LOmi')
};

function cxvari() {
    console.log('Cxvari')
}

//2

function asyc2(){
    setTimeout(() => {
        console.log('es kodi 2 wamshi')
        
    }, 2000);

    
    
};
function asyc1(){
    setTimeout(() => {
        console.log('es kodi ert wamshi') //ეს გამოვა  async2 სწრაფად რადგან ერთ წამში შესრულდება მეორე ასინქრონული ორ წამშ
        
    }, 1000);
};
lomi();
asyc1();
asyc2();
cxvari();
//3

function start() {
    console.log('start');
};

function st1(){
    setTimeout(() => {
        console.log('this code 1 sec')
        
    }, 1000);
};

function st2(){
    setTimeout(() => {
        console.log('this code 2 sec')
        
    }, 2000);
};

function end() {
    console.log('end programm')
};

start();
st1();
st2();
end();

//programa მორჩება რადგან ასინქრონულებს დრო უნდათ ენდ პირდაპირ გამოვა

//4

function first(){
    setTimeout(() => {
        console.log('this code 0,5 sec')
        
    }, 500);
};

function second(){
    setTimeout(() => {
        console.log('this code 1,5 sec')
        
    }, 1500);
};

function third(){
    setTimeout(() => {
        console.log('this code 2 sec')
        
    }, 2000);
};

first();
second();
third()

//5


function sync() {
    console.log('user logged in');
};

function sec(){
    setTimeout(() => {
        console.log('fetching data')
        
    }, 2000);
};

function th(){
    setTimeout(() => {
        console.log('data recieved')
        
    }, 1000);
};
sync();
sec();
th();
//pirveli sync meore th da mesame sec იმიტო რო th ჭირდება 1 წამი ხოლო იმას 2 წამი





