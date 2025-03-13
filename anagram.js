// --- Example
// anagram('coding money', 'money coding') --> true;
// ignore spaces or punctuation and treat upper and lower case the same

function charMap(str) {
    const charmap = {}
    str = str.toLowerCase().replace(/\W/g, '')
    for (let char in str) {
        charmap[char] = ++charmap[char] || 1
    }

    return charmap;
}

function anagram(strA, strB) {
    strA  = strA.toLowerCase().replace(/\W/g, '')
    strB = strB.toLowerCase().replace(/\W/g, '')

    if (strA.length !== strB.length) {
        return false;
    }
    
    const charMapOfA = charMap(strA), charMapOfB = charMap(strB);

    for (const key in charMapOfA) {
        if (charMapOfA[key] !== charMapOfB[key]) {
            return false;
        }
    }

    return true;
}

console.log(anagram('RAIL!', 'Liar!!!!#%$%^'));