//1
function digitalRoot(n) {
  return (n-1) % 9 +1;
};



//2
function highAndLow(numbers){
  
  
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
};

//3
function isIsogram(str) {
  str = str.toLowerCase(); 
  return new Set(str).size === str.length;
}