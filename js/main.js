//abcdefghijklmnopqrstuvwxyz0123456789






function bubbleSort(arr){
    const len = arr.length
    let swap = (arr, left, right)=>{
        [arr[left], arr[right]] = [arr[right], arr[left]]
    }
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len - i -1; j++){
            if(arr[j] > arr[i+1]){
                swap(arr, j, j+1)
            }
        }
    }
    return arr
}

console.log(bubbleSort([2,1,4,3]))

var thirdMax = function(nums) {
    let arr = nums.filter((el,i) => i == nums.indexOf(el)).sort((a,b) => b - a)[1]
    if(nums.length < 3){
         return Math.max(...nums)
    } else {
        return thirdMax(arr)
    }
};
console.log(thirdMax([1,1,2]))