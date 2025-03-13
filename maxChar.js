function maxChar(str) {
    const charMap = {};
    let maxChar = '';
    let maxCharCount = 0;

    for (let char of str) {
        charMap[char] ? ++charMap[char] : charMap[char] = 1;
    }

    for (let key in charMap) {
        if (charMap[key] > maxCharCount) {
            maxCharCount = charMap[key];
            maxChar = key;
        }
    }

    return maxChar;
}

console.log(maxChar("apple 1123111"));