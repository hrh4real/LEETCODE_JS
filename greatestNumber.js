/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // initialize a reuslt array
    let result = []
    // find the max element
    let maxCandies = Math.max(...candies)
    // check for every number inside the candies array
    for(let candy of candies){
        result.push(candy + extraCandies >= maxCandies)
    } 
    return result 

    /*
    OR
        let maxCandy = Math.max(...candies)
        return candies.map(candy => (candy + extraCandies) >= maxCandy);
    */
};
