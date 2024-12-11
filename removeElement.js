
// func takes 2 params, arr of nums, intgers & val intger
// 



var removeElement = function(nums, val) {
    let k = 0;

    // Iterate through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not equal to val
        if (nums[i] !== val) {
            // Move it to the current k position
            nums[k] = nums[i];
            // Increment k
            k++;
        }
    }
    // Return the count of elements not equal to val
    return k;
};