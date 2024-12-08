//abcdefghijklmnopqrstuvwxyz



// func takes a str and arr of str => true or false if the arr contains all rots
// str & arr of strs, the str not always valid, maybe ''
// boolean if the arr contains all the possiblities of the given str rots
// contain_all_rots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

function containAllRots(strng, arr) {
    // loop through the arr
    // conditional to determine if the arr not included the new fomed str fromed strng.slice(i) + strng(0,i)
    // return false either return true
    for(let i = 0; i < strng.length; i++){
        if( arr.indexOf(strng.slice(i) + strng.slice(0,i)) == -1){
            return false
        }
    }

    return true
}

console.log( containAllRots( "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) )
