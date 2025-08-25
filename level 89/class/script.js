//1
const sumNested = arr => {
  if (Array.isArray(arr)) {
    return arr.reduce(function(accumulator, currentValue) {
      return accumulator + sumNested(currentValue);
    }, 0);
  } else {
    return arr;
  }
};

//2
function repeatStr (n, s) {
  let res = '';
  for(let i =0;i<n; i++){
    res+=s
  }
  return res
}

//3
function removeChar(str){
  return str.slice(1,-1)
 

};

//4
function isIsogram(str) {
  str = str.toLowerCase(); 
  return new Set(str).size === str.length;
}