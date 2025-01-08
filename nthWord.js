function longest(arr, n) {
    return arr.sort((a,b) => b.length - a.length)[n-1]
  }
  console.log(longest( ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k','l'],1))