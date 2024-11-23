//abcdefghijklmnopqrstuvwxyz

const uniqueSort = (arr) => {
    let breadCrumbs = {}
    let result = []
    let sortedArr = []
    let max = 0
    for(let num of arr){
        if(!breadCrumbs[num]){
        breadCrumbs[num] = true
        result.push(num)
        } 
    }
return result
}

// console.log(uniqueSort([3,4,1,3,2,3,2,6,5]))

// cleaning our global scope by moving our cache inside our function
// in closure we retain access to variables we're passing before, so we can remember prior values. 

const factorial = (n) => {
    if(n === 0){
        return 1
    } else {
        return n * factorial(n-1)
    }
}
const memoize = (cb) => {
let memo = {}

return (n) => {
     if(n < 2){
        return n
    } else if(memo[n]){
        return memo[n]
    }
    else {
     let result = cb(n)
     memo[n] = result
     return result
    }
}
}

const memoize10 = memoize(factorial)
console.log(memoize10(5))
// const parentFact = factClosure()
// console.log(parentFact(50))


//accumulator technique
function joinElement(array, joinString){
    function recurse(index, resultSofar){
        resultSofar += array[index]
        if(index === array[array.length - 1]){
            return resultSofar
        } else {
            return recurse(index + 1, resultSofar + joinString);
        }
    }
    return recurse(0, '')
}
// console.log(joinElement(['s', 'cr', 't cod', ':) :)'], 'e'))
//iterative technique
// function joinElement(array, joinString){
//     let resultSoFor = ''
// for(let i = 0; i < array.length - 1; i++){
//     resultSoFor += array[i] + joinString;
//    }
//   return resultSoFar + array[array.length - 1]
// }

function binarySearch(arr,item){
    let min = 0
    let max = arr.length -1
    let guess; 

    while(min <= max){
        guess = Math.floor((min + max)/2)
        if(arr[guess] === item){
            return guess
        } else {
            if(list[guess] < item){
                min = guess + 1
            } else {
                max = guess - 1
            }
        }
    }
    return -1
}

let gcd = (a,b) => b === 0? a : gcd(b,a % b)


/*
(1785, 546) => 546 === 0? 1785 : gcd(546, 1785 % 546)
(546, 147) => 147 === 0? 546 : gcd(147, 546 % 147)
(147, 105) => 105 === 0? 147 : gcd(105, 147 % 105)
(105, 42) => 42 === 0? 105 : gcd(42, 105 % 42)
(42, 21) => 21 === 0? 42 : gcd(21, 42 % 21)
(21, 0) => 0 === 0? 21 : // result 21
*/
function sort(initialArray, sortingArray) {
    let obj = {}
    let result = []
    let max = 0
    for(let i = 0; i < initialArray.length; i++){
        if(!obj[initialArray]){
            obj[initialArray[i]] = sortingArray[i]
        }
  }
  for(let char in obj){
    if(obj[char] > 0){
        result.push(char)
        max = obj[char]
    } else{
        result.push(char)
    }
  }

  return result
}
  console.log(sort(['x', 'y', 'z'], [1, 2, 0]))