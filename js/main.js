//abcdefghijklmnopqrstuvwxyz


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
    return k;};




console.log(removeElement([0,1,2,2,3,0,4,2], 2))
console.log(removeElement([3,2,2,3], 3))














var merge = function(nums1, m, nums2, n) {
    //merge nums1, nums2, sorted ascend
    // nums1 length = m + n, nums1.slice(0,m+1) denotes the el that should merged
    //
    let p1 = m - 1; // Pointer for nums1's initialized part
    let p2 = n - 1; // Pointer for nums2
    let p = m + n - 1; // Pointer for the end of nums1

    // Merge in reverse order
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // Copy any remaining elements from nums2 (if any)
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
  };

//   console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
//   console.log(merge([1], 1, [], 0))
//   console.log(merge([0], 0, [1], 1))


















