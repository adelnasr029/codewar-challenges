//abcdefghijklmnopqrstuvwxyz0123456789

var intToRoman = function(num) {
    let roman = {
    'I': 1, 
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

let result = []
if(num === 1000){
     result.push('M')
     return intToRoman(num - 1000)
} else{
    return result
}
};


console.log(intToRoman(1000))