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

// let memo = {}

// function factorial(n){

//      if(n < 2){
//         return n
//     } else if(memo[n]){
//         return memo[n]
//     }
//     else {
//      let result =   n * factorial(n-1)
//      memo[n] = result
//      return result
//     }
// }

// console.log(factorial(50))

const factorial = (num) => num < 2? num : num * factorial(num-1)
function sumFactorial(arr){
return arr.reduce((acc,c) => acc + factorial(c), 0)
}

console.log(sumFactorial([4,6]), 744)