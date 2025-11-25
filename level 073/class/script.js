//1
function getWeekday(year, month, day) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let date = new Date(year, month - 1, day); 
  let dayIndex = date.getDay(); 
  return days[dayIndex];
}

console.log(getWeekday(1993, 7, 1)); 



//2

let date = new Date();
console.log(date);

let now = new Date();

let formatted = now.toLocaleString();

document.getElementById('date').textContent = formatted;



