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
