//abcdefghijklmnopqrstuvwxyz


function chunkArray(array, size) {
let result = []
let lastArray = result[result.length -1]
for(char of array){
  if(!lastArray || lastArray.length === 5){
    result.push([char])
  } else {
    lastArray.push(char)
  }
}
}
// [[0]]
let result = [5]
console.log(!1 == false)
// console.log(chunkArray([0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5))