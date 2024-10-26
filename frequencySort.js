var frequencySort = function(s) {
    let charMap = {}
    for(const char of s){
        charMap[char] = charMap[char] + 1 || 1
    }


return s.split('').sort((a,b) => charMap[b] - charMap[a] || a.localeCompare(b)).join('')
};

console.log(frequencySort('loveleetcode'))