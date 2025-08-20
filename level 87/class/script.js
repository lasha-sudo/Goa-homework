//1

var number = function(busStops){
  let num = busStops.reduce((a,[x,y])=> a+x-y,0)
  return num
}

//2
let stray = numbers =>  numbers.find(n => numbers.indexOf(n) === numbers.lastIndexOf(n))