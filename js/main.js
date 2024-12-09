//abcdefghijklmnopqrstuvwxyz

// func takes 4 params first 2 are arr of nums, second 2 are intg
// arr of nums, not always valid, nums, intg >= 0
// return arr, sorted ascend
// 

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

// func takes 3 params, fighter1 & fighter2 are obj, third == str name one of the 2 fighters 
// 3 params first 2 are new instance each instance with 3 props, third is str
// return str represent the name of the winner based on comparison bt health, damage per attack
//declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew"
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}
function declareWinner(fighter1, fighter2, firstAttacker) {
    if (fighter1.name !== firstAttacker) return declareWinner(fighter2, fighter1, fighter2.name)
        if (fighter1.health <= 0) return fighter2.name
        if (fighter2.health <= 0) return fighter1.name
      
        return declareWinner(new Fighter(fighter2.name, fighter2.health - fighter1.damagePerAttack, fighter2.damagePerAttack), fighter1, fighter2.name)
}


console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"))