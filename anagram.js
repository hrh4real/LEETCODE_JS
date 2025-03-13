// --- Example
// anagram('coding money', 'money coding') --> true;
// ignore spaces or punctuation and treat upper and lower case the same

/*
    HINT : 
    step 1: build charMap for strA
    step 2: build charMap for strB
    step 3: compared both the charmaps
*/

function anagram(strA, strB) {
    const charMapOfA = {}, charMapOfB = {};
    strA  = strA.toLowerCase().replace(/\W/g, '')
    strB = strB.toLowerCase().replace(/\W/g, '')

    if (strA.length !== strB.length) {
        return false;
    }
    
    for (let char of strA) {
        charMapOfA[char] = ++charMapOfA[char] || 1
    }
    for (let char of strB) {
        charMapOfB[char] = ++charMapOfB[char] || 1
    }

    for (const key in charMapOfA) {
        if (charMapOfA[key] !== charMapOfB[key]) {
            return false;
        }
    }

    return true;
}

console.log(anagram('RAIL!', 'Liar!!!!#%$%^'));