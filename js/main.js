//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
    return number % 2 === 0? 'Even' : 'Odd'
  }

  //In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
  function makeNegative(num) {
    return num > 0? -num : num
  }