var mergeSort = function (nums1, nums2, m, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i--]
        } else {
            nums1[k] = nums2[j--]
        }
        k--;
    }
}

// testing 
let nums1 = [1,2,3,0,0,0], m = 3;
let nums2 = [2, 5, 6], n = 3;

mergeSort(nums1, nums2, m, n);

console.log(nums1);