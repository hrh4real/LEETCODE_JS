/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let majorNum = 0;
    let majorNumCount = 0;
    const numberMap = {};

    for (let number of nums) {
        numberMap[number] = ++numberMap[number] || 1
    }

    for (let key in numberMap) {
        if (numberMap[key] > majorNumCount) {
            majorNum = Number(key);
            majorNumCount = numberMap[key]
        };
    }

    return majorNumCount >= nums.length / 2 ? majorNum : null
};
