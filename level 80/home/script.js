//1

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

//2

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

//3

function check(a, x) {
  for(let i in a) {
    if(a[i] ===x) {
      return true
    }
  }
  return false
}


//4

function simpleMultiplication(number) {
  if(number%2===0){
    return 8*number
  }else{
    return 9*number
  }
  
}

