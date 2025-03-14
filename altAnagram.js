// function cleanStr(str) {
//     return str.toLowerCase().replace(/\W/g, '').split('').sort().join('')
// }

// function anagrams(strA, strB) {
//     return cleanStr(strA) === cleanStr(strB)
// }

// console.log(anagrams('rail road!@@#', 'roa RAil@#&('))

function cleanStr(str) {
    return str.toLowerCase().replace(/\W/g, '').split('').sort().join();
}

function anagram(strA, strB) {
    return cleanStr(strA) === cleanStr(strB);
}

console.log(anagram("papa john^^&*", "john papa&*&(*"));