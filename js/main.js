//abcdefghijklmnopqrstuvwxyz

function pattern(n){
    if(n < 1){
      return ''
    }
  let res = []
  for(let i = 1; i <= n; i++){
    res.push(`${i}`.repeat(i))
  }
    return res.join('\n')
  }

  console.log(pattern(11))