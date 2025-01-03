const uniqSort = function(arr){
    const breadcrumbs = {}; // here's we cached the values we've seen before
    const result = []
    for(let i = 0; i < arr.length; i++){
      if(!breadcrumbs[arr[i]]){
        result.push(arr[i])
        breadcrumbs[arr[i]] = true
      }
    }
    return result.sort((a,b)=> a - b)
  }
  
  console.log( uniqSort([4,2,2,3,2,2,3,4]))