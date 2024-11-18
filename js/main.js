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

const factorial = n => n < 2? n : n * times10(n-1)

const memoize = (cb) => {
let memo = {}

return function factorial(n){

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

const memoize10 = memoize(times10)
console.log(memoize10(5))
// const parentFact = factClosure()
// console.log(parentFact(50))

