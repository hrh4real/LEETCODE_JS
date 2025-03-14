// --- Example
// anagram('coding money', 'money coding') --> true;
// ignore spaces or punctuation and treat upper and lower case the same

function charMap(str) {
    const charmap = {};
    for (let char of str) {
        charmap[char] = ++charmap[char] || 1;
    }
}

function cleanStr(str) {
    return str.toLowerCase().replace(/\W/g, '');
}

function anagram(strA, strB){
    strA = cleanStr(strA)
    strB = cleanStr(strB)

    if (strA.length !== strB.length) return false;
    const charMapOfA = charMap(strA), charMapOfB = charMap(strB);
    
    for (let key in charMapOfA) {
        if (charMapOfA[key] !== charMapOfB[key]) return false;
    }

    return true;
}

console.log(anagram("papa john@$*($", "pa@#ap john"));