/**
 * @param {number} n
 * @return {number}
 */

const fact = (num) => {
    if(num === 0 || num === 1) return num;
    return num * fact(num - 1);
}
var trailingZeroes = function(n) {
    let result = fact(n);
    let zeroCount = 0;

    let resultS = result.toString();
    for(let i = resultS.length - 1; i >= 0; i--){
        if(resultS[i] !== 0) break;
        zeroCount++;
    }

    return zeroCount;
};

console.log(trailingZeroes(5));