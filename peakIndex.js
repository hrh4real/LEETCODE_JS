var peakIndexInMountainArray = function(arr) {
    let left = 0, right = arr.length - 1;
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] < arr[mid + 1]) left = mid + 1;
        else right = mid;
    }

    return left;
};

console.log(peakIndexInMountainArray([0, 1, 3, 4, 1, 0]));