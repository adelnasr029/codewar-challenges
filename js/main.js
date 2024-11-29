//abcdefghijklmnopqrstuvwxyz

function lenR(arr) {
  if (arr.length == 0) {
    return 0;
  }
  return 1 + lenR(arr.slice(1));
}

console.log(lenR([1,2,3,4,5]))
console.log([3,5,5].slice(1))