function grabscrab(anagram, dictionary) {
    // 2 params, 1st is str, 2nd is arr of words
    // new arr of words that matches the letters in anagram
    // grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
    // 
    let anag = anagram.split('').sort().join('')
    return dictionary.filter(el => el.split('').sort().join('') === anag)
  }
  
  console.log(grabscrab("oob", ["bob", "baobab"]))