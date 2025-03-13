// chunk([1, 2, 3, 4], 2) --> [[1, 2], [3, 4]]
// .slice(startIndex, endIndex)
function chunk(arr, size) {
    const result = [];
    let index = 0

    while (index < arr.length) {
        result.push(arr.slice(index, index + size))
        index += size;
    }

    return result;
}

console.log(chunk([1, 2, 3, 4, 5], 10))