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


console.log(longestWord('Top Shelf Web Development Training on Scotch'))

