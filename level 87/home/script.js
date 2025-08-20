//1
function XO(str) {
  str = str.toLowerCase();   
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      xCount++;
    } else if (str[i] === 'o') {
      oCount++;
    }
  }

  return xCount === oCount;
};

//2

function gimme(arr) {
  
  let sorted = arr.slice().sort(function(a, b) {
    return a - b;
  });

  
  let middleValue = sorted[1];

  
  return arr.indexOf(middleValue);
}

//3
function getDivisorsCnt(n){
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;

    
}











//4
function getAverage(marks){
  let avg = marks.reduce((x,y) => x+y,0);
  return Math.floor(avg / marks.length)
};


//5
function digitize(n) {
  return String(n).split('').map(Number).reverse()
};