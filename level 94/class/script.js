//1

function lomi() {
    console.log('LOmi')
};


function asyc1(){
    setTimeout(() => {
        console.log('es kodi ert wamshi') //ეს გამოვა  async2 სწრაფად რადგან ერთ წამში შესრულდება მეორე ასინქრონული ორ წამშ
        
    }, 1000);
};

function asyc2(){
    setTimeout(() => {
        console.log('es kodi 2 wamshi')
        
    }, 2000);

    
    
};

function cxvari() {
    console.log('Cxvari')
}

lomi();
asyc1();
asyc2();
cxvari();
