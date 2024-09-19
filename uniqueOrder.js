
      // arr of num or str letters 
      // return new list, unique el, preserving the original order
      // uniqueInOrder([1,2,2,3,3]) == [1,2,3]
      var uniqueInOrder=function(iterable){
        // conditional to determine arr || str then split
        // filter
        return typeof iterable === 'string'? iterable.split('').filter((el,i) => el !== iterable[i+1]) : iterable.filter((el,i) =>  el !== iterable[i+1])
      }

      console.log(uniqueInOrder('ABBCcAD') ) // ['A', 'B', 'C', 'c', 'A', 'D']
      console.log(uniqueInOrder([1,2,2,3,3]) )// [1,2,3]
      console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']