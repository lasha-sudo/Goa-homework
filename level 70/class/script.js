//1
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a - b);
  return numbers[0] + numbers[1];
};

//2
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

//3
function replace(s) {
   return s.replace(/[aeiouAEIOU]/g, '!');
 
}