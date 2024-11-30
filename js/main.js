//abcdefghijklmnopqrstuvwxyz

function max(arr, counter = arr.length -1, biggest = arr[0]){
  if(counter <= 0){
    if(arr[counter] > biggest){
      biggest = -Infinity
    }
    return biggest
  } else {
    if (arr[counter] > biggest){
      biggest = arr[counter]
    }
    return max(arr, counter - 1, biggest)
  }
}

console.log(max([5,3,10,12]))