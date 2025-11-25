//1

fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                console.log('ლომი' , data)}
            );
            


//2

document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const value = document.getElementById("myInput").value;
    console.log("შეყვანილი ტექსტი:", value);
  });









