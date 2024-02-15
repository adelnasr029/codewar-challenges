//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
    return number % 2 === 0? 'Even' : 'Odd'
  }

  //In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
  function makeNegative(num) {
    return num > 0? -num : num
  }

//You get an array of numbers, return the sum of all of the positives ones.
  function positiveSum(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
        sum += arr[i]
      }
    }
    return sum
  }

  //Complete the solution so that it reverses the string passed into it.
  function solution(str){
    return str.split('').reverse().join('')
  }

  //Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
  function boolToWord( bool ){
    return bool === true? 'Yes' : 'No'
  }

  //We need a function that can transform a number (integer) into a string.
  function numberToString(num) {
    // Return a string of the number here!
    return num.toString()
  }

  //Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
  function opposite(number) {
    return -number
  }

  //It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
  function removeChar(str){
    //You got this!
   return str.slice(1,-1)
   };
   
   //Complete the square sum function so that it squares each number passed into it and then sums the results together.
   const squareSum = numbers => numbers.reduce((acc,c)=> acc + (c*c), 0)

   //Find the smallest integer in the array
   class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

  //Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
  function repeatStr (n, s) {
    return s.repeat(n)
  }
//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
  var summation = function (num) {
    let sum = num
    if(sum > 0){
       for(let i = 1; i < num; i++){
      sum += i
    }
    }
    return sum
  }

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(sheep) {
    // TODO
    let sum = 0;
    for(let i = 0; i < sheep.length; i++){
      if(sheep[i] == true){
           sum = sum + sheep[i]
      }
    }
    return sum
  }
  
//Write a function that removes the spaces from the string, then return the resultant string.
  function noSpace(x){
    return x.split(' ').join('')
    }

//Your task is to create a function that does four basic mathematical operations.The function should take three arguments - operation(string/char), value1(number), value2(number).The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2){
    //Code
    if(operation == '+'){
      return value1 + value2
    }else if(operation == '-'){
          return value1 - value2
    }else if(operation == '*'){
          return value1 * value2
    }else{
          return value1 / value2
    }
  }

  //We need a function that can transform a string into a number. What ways of achieving this do you know?
  const stringToNumber = function(str){
    // put your code here
    return Number(str)
  }

  //We need a function that can transform a string into a number. What ways of achieving this do you know?
  function century(year) {
    // Finish this :)
    return Math.ceil(year/100)
  }
  function litres(time) {
    return Math.floor(time * 0.5)
  }

  //Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.The output should be two capital letters with a dot separating them.
  function abbrevName(name){
    return name.split(' ').map(item => item.charAt(0)).join('.').toUpperCase()
    }
 
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
    //code here
    return n.toString().split('').reverse().map(item=> parseInt(item))
  }

//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
function greet(name){
    return `Hello, ${name} how are you doing today?`
  }

//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
  function lovefunc(flower1, flower2){
    // moment of truth
    return (flower1 % 2 === 0 && flower2 % 2 !== 0? true : false) || (flower2 % 2 === 0 && flower1 % 2 !== 0? true : false)
  }