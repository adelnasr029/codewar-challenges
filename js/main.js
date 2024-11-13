//abcdefghijklmnopqrstuvwxyz

//func takes arr as param and return sorted arr
function unique(arr){
  // declare var charMap which is an {} that reassigned to keep track the value
  // var result which [] reassigned with 
  // for loop 
  // then conditional to evalute whether every value we are looping through is less than the max value 
  // push method 
  let charMap = {}
  let result = [arr[0]]
  let max = 0
  for(let i = 1; i < arr.length; i++){
    if(!charMap[arr[i]]){
      result.push(arr[i])
      charMap[arr[i]] = true
    } else {
      charMap[arr[i]] = true
    }
  }
  return new Map(result)
}


// console.log(memoTimes10(9))
// console.log(cache)
const times10 = (n) => n * 10
let memoClosure = () => {
  let cache = {}
return (n) => {
  if(n in cache){
    return cache[n]
  } else {
    let result = n * 10
    cache[n] = result
    return result
  }
}
}

// let memo1 = memoClosure()// memo1 is retaining a reference to returned value of the parent func 
// let memo2 = memoClosure()
// console.log(memo1(9))
// console.log(memo2(7))

const memo = (cb) => {
  let cache = {}
  return (n) =>{
    if( n in cache){
      return cache[n]
    } else {
      let result = cb(n)
       cache[n] = result
      return result
    }
  }
}
// const memoize = memo(times10)
// console.log(memoize(5))
function mergeArrays(...arrays) {
 // some more code here
 let jointArray = []

 arrays.forEach(array => {
     jointArray = [...jointArray, ...array]
 });
 return new Set([...jointArray]) + []
}

// console.log(mergeArrays([1,3,3,5], [1,4,2,5]))
// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);

function arrayFilter(arr, func){
  for(char of arr){
    if(func(char)){
      return char
    } else{
      return undefined
    }
  }
}