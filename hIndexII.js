var hIndex = function(citations) {
    n = citations.length;
    let left = 0, right = n - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let hIndex = n - mid;
        if(citations[mid] === hIndex) return hIndex;
        else if (citations[mid] < hIndex) left = mid + 1;
        else right = mid - 1;
    }

    return n - left;
};

console.log(hIndex([0, 2, 100]));