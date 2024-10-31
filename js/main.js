//abcdefghijklmnopqrstuvwxyz

function palindromeChecker(text) {
  // Code goes here
  let arr = text.toLowerCase().split('')
  return arr.every((el,i) => el === arr[arr.length - i - 1] && i <= Math.floor(arr.length/2))
  // for(let i = 0; i < arr.length/2; i++){
  //     if(arr[i] !== arr[arr.length - i - 1]){
  //         return false
  //     }
  // }
  // return true
}

console.log(palindromeChecker('madam'))
console.log(palindromeChecker('adel'))

function maxFrequent(text){
  let charMap = {} // to keep track char and the number it exists
  let maxChar = ''
  let maxCount = 0

  for(char of text){
      charMap[char] = charMap[char] + 1 || 1
  }

  for(char in charMap){
      if( charMap[char] > maxCount){
          maxCount = charMap[char]
          maxChar =  char
      }
  }
  return char
}
console.log(maxFrequent('aaabbccccc'))


function forIn(str){
  for(char in str){
    console.log(char)
  }
}

forIn({a: 2, b: 5})
let club = 'Real MaDrid'
console.log([... new Set(club)])