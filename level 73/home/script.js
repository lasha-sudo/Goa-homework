//1
function daytime() {
    let now = new Date();
    console.log(now.toLocaleString());
};
daytime();

//2

function getage(birth) {
    let today = new Date();
    let birthDate = new Date(birth);
    let age = today.getFullYear() - birthDate.getFullYear();
    console.log(age)

};

getage(2010-8-14);

//3
function getDay(date) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let d = new Date(date);
  console.log(days[d.getDay()]);
};
getDay("2025-06-23"); 