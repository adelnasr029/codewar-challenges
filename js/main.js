//abcdefghijklmnopqrstuvwxyz




//func takes n as an intg param => function counter
// num, intger/ +ve/-ve/ always valid
// num 
// 
var createCounter = function(n) {
  // create a closure
  // by return a func that increment n with each call
  // closure is func with an inner func then the inner func can access var defined in the outer func scope 
return  () => n++
};

let count = createCounter(10)
console.log([count(), count(), count()])

// const mapReduce = (array, filterFunction) => 
//   array.reduce((acc,current) => filterFunction(current)? [...acc, current] : acc, [])

// console.log(mapReduce([1,2,3,4], x => x % 2 === 0))