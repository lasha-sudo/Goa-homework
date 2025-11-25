//1
function invert(array) {
  let inverted = [];
  
  for(let i of array) {
    inverted.push(-i)
  }
  return inverted

}

//2
function getAverage(marks) {
  let sum = 0;
  for (let i of marks) {
    sum += i;
  }
  return Math.floor(sum / marks.length);
}