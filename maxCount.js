

var maxCount = function(banned, n, maxSum) {
    let k = 0
    let sum = 0
    for(let i = 1; i <= n; i++){
        if(!banned.includes(i)){
            sum +=i
            if( sum <= maxSum){
                k++
            }
        }
    }
    return k
};
console.log(maxCount([1,5,6], 5, 6))