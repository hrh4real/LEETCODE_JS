let nums = [1, 2, 3, 4, 5];
let k = 3;

function rotate(nums, k) {
    let n = nums.length;
    k = k % n;  
    
    // let lastK = nums.splice(n - k, k);
    // nums.unshift(...lastK); 
    function reverse(start, end) {
        while(start < end){
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++
            end--
        }
    }

    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
}

rotate(nums, k);
console.log(nums); // [3, 4, 5, 1, 2]