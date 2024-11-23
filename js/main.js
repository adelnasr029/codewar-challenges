//abcdefghijklmnopqrstuvwxyz

const bubble = (arr) => {
    let res = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
          if(arr[j] > arr[j + 1]){
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
            res.push([...arr])
          }
        }
      }
      return res
  }

  console.log(bubble([2,1,4,3]))