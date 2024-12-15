//abcdefghijklmnopqrstuvwxyz



var removeDuplicates = function(nums) {
    if (nums.length < 2) return nums.length
    let k = 1
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[k - 1]){
            nums[k] = nums[i]
            k++
        }
    }
    return nums
};
/*
    if (nums.length < 2) return nums.length
    let k = 1
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[k - 1]){
            nums[k] = nums[i]
            k++
        }
    }
    return nums
    [1,1,2,2,3,3]
    // i = 1 & k = 1 => [1,1,2,2,3,3]
    // i = 2 & k = 1 => [1, 2, 2, 3, 3]
    // i = 3 & k = 2 => [1, 2, ]
    // i = 4 & k = 2 => [1, 2, 3, ]
    // i = 5 & k = 3 => [1, 2, 3, ]
 */

console.log(removeDuplicates([1,1,2,2,3,3]))






















