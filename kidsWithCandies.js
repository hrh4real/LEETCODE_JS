var kidsWithCandies = function (candies, extraCandies) {
    let maxCandy = Math.max(...candies)
    return candies.map(candy => (candy + extraCandies) >= maxCandy);
}

console.log(kidsWithCandies([1, 3, 4, 1, 3], 3));
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([1, 3, 6, 1, 3], 3));