//abcdefghijklmnopqrstuvwxyz

function reverseStr(str){
  if(str === ''){ //base case
    return ''
  } else{
   return  reverseStr(str.substr(1)) + str[0]
  }
}
//reverseStr('code')// 'c' 
//reverseStr('ode') // 'o'
//reverseStr('de') // 'd'
//reverseStr('e') // 'e'
// reverseStr('') // ''

//reverseStr(str.substr(1)) + str[0] // str = 'abc', str 


console.log(reverseStr('abc'))
function fatorial(n){
  if(n === 0){
    return 1
  } else{
  return   fatorial(n-1) * n
  }
}

console.log(fatorial(4))

function fib (n){
  if( n >= 3){
    return fib(n - 1) + fib(n - 2)
  } else{
    return 1 
  }
}

function countVowel(str){
  let vowel = 'aeiou'
  let count = 0
  for( let char of str){
    if(vowel.includes(char)){
       count++
    }
  }
  return count
  return [...str].filter(el => vowel.includes(el)).length 
}
console.log(countVowel('anehizxcv'))