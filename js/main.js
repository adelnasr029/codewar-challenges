//abcdefghijklmnopqrstuvwxyz

function longestWord(str){
  // return str.split(' ').sort((a,b) => b.length - a.length)[0]// slowest
//   return str.split(' ').reduce((maxLengthWord, currentWord) => {
//     if(currentWord.length > maxLengthWord.length){
//         return currentWord
//     } else {
//         return maxLengthWord
//     }
// }, '') // fastest 
let arr = str.split(' ')

let longestDigit = ''
let maxCount = 0
for(let i = 0; i < arr.length; i++){
  if( arr[i].length > maxCount){
    maxCount = arr[i].length
    longestDigit = arr[i]
  }
}
return longestDigit
}

console.log('f'.charCodeAt().toString(8))
console.log(longestWord('Top Shelf Web Development Training on Scotch'))

let arr = [12,2,3]
console.log(arr.splice(1,1,700000000)) // [2]
console.log(arr)// [12, 700000000, 3]

// func that nums arr and target num => arr of indices of el within in nums arr that their sum = target
// 1st arr, nums/ +ve/-ve intgers/ always valid, 2nd num, intg/ +ve/-ve 
// arr of indices tht corresponds with elements that thier sum = targe
//  nums = [3,2,4], target = 6 Output: [1,2]
// 

function twoSum(nums, target){
// loop through nums and return the elements that their sum = target
// decalare a var of res of []
// create a var of charMap to keep track the el that their sum = target
let charMap = {}
let res = []
for(let i = 0; i < nums.length; i++){
  for(let j = 1; j < nums.length; j++){
    if(nums[j] + nums[i] === target && res.length < 2){
      res.push(i)
    }
  }
}
return res
}

console.log(twoSum([2,3,2,3], 6), [1,2])
console.log(twoSum([3,3], 6), [0,1])