/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let newStr = ""
    let length1 = word1.length, length2 = word2.length;
    let i = 0, j = 0;
    while (i < length1 && j < length2) {
        newStr = newStr + word1[i] + word2[j]
        i++;
        j++;
    }

    newStr += word1.slice(i) + word2.slice(j);

    return newStr;
};
