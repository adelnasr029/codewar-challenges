//abcdefghijklmnopqrstuvwxyz0123456789

// function takes prices arr of nums => num that represent max profit tht calc by subtracting the el of the arr from its index+1
// arr of nums, intg, always valid
// 

var maxProfit = function(prices) {
    if(prices.length === 0) return 0
    let max = 0
    let min = Infinity
    for(let i = 0; i < prices.length ; i++){
        min = Math.min(min, prices[i])
        let profit = prices[i] - min
        max = Math.max(max, profit)
    }
    return  max 
};

console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([2, 4, 1]))

console.log(Math.min(Infinity, 1))
console.log(2 - Infinity)














