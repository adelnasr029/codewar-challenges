function groupByCommas(n) {
    // num, intg
    // str of num where every 3 digits separated by comma
    //  1000000  ->   "1,000,000"
    // stringfy, then loop every 3 digits 
      let arr = n.toString().split("");
      if(arr.length <= 3) return arr.join("");
      for(let i = arr.length-3; i > 0; i-= 3) arr.splice(i, 0, ',');
    // i = 7 - 3 = 4
    // i = 4 - 3 = 1
      return arr.join("");
  }
  console.log(groupByCommas(1000000))
  