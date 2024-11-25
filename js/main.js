//abcdefghijklmnopqrstuvwxyz

function solve(a,b){
    if (!a || !b) return [a,b]
    if (a >= 2*b) return solve(a-2*b, b)
    if (b >= 2*a) return solve(a, b-2*a)    
    return [a,b]
}

console.log(solve(6,19),[6, 7])







//   console.log(recurrence(3, n => 2 * n, 5), 48)
//   function recurrence(base, formula, term) {
//     if(term === 1){
//     return base
//     } else {
//     return formula(recurrence(base, formula, term - 1))
//     }
//   }

/*
  function recurrence(3, n => 2 * n, 5) {
    if(5 === 1){
    return base
    } else {
    return formula(24) 24 => 24 => 2 * 24// 48
    }
  } 
*/
/*
  function recurrence(3, n => 2 * n, 4) {
    if(4 === 1){
    return base
    } else {
    return formula(12) 12 => 2 * 12// 24
    }
  } 
*/
/*
  function recurrence(3, n => 2 * n, 3) {
    if(3 === 1){
    return base
    } else {
    return formula(6)//  6 => 2 * 6// 12
    }
  }
*/
/*
  function recurrence(3, n => 2 * n, 2) {
    if(2 === 1){
    return base
    } else {
    return formula(3) // 3 => 2 * 3//  6
    }
  } 
*/
/*
  function recurrence(3, n => 2 * n, 1) {
    if(1 === 1){
    return 3
    } 
  }
*/