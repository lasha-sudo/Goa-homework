//1

function pingvini() {
    console.log('pingvini')
};
function lomi() {
    console.log('Lomi')
};

fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json));

pingvini();
lomi();


//2
//function async(wk) {
            //return new Promise((resolve, reject) => {
                //if (wk === "")
                   // reject(Error("araferi"));
                //setTimeout(function () {
                   // resolve(wk);
               // }, 1000);
            //})
        //}

        //asyncPromiseFunction("mushaoba")
            //.then((result) => {
                //console.log("pingvini")
            //})
            //.catch((err) => {
               // console.log(err)
            //});
            


//3

const API_KEY = "5faa8e189a4b974b5f1dd2556054e48f"
    const cityName = "lomi"
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

    const myWeatherAsyncFunc = async () => {
         const data = await fetch(API)
            .then((response) => response.json())
            .then((data) => data)

            document.body.innerHTML =  `city name: ${cityName}   ` ;

            
            
                
            
        console.log(data)
    }
    myWeatherAsyncFunc()


