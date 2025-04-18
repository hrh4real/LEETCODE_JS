str = ["flower", "fluid", "fluck"]

let longestCommonPrefix = function (str) {
    if (str.length === 0) return "";

    str.sort();
    let first = str[0], last = str[str.length - 1];
    let i = 0;
    while (i < first.length && first[i] === last[i]) {
        i++;
    }

    return first.substring(0, i);
}

console.log(longestCommonPrefix(str));