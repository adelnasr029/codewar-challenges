//abcdefghijklmnopqrstuvwxyz0123456789

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            let temp = arr[j]
            if(arr[j] > arr[j + 1]){
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([4, 1 , 2, 3]))
