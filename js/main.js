//abcdefghijklmnopqrstuvwxyz0123456789


 function  fromRoman(str) {
    let romans = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "v": 5,
        "IV": 4,
        "I": 1, 
      }
      let num  = 0
    for(let i = 0; i < str.length; i++){
        let current = romans[str[i]];
        let next = romans[str[i + 1]];

        if(current < next){
            num -= current
        }else{
            num += current
        }
    }
    let arr = []
    for(let i = 0; i < num; i++){
        arr.push(i)
    }
    return arr
}

console.log(fromRoman('III'))