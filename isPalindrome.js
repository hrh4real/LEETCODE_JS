function palindrome(str) {
    // complexity TC = O(n) SC = O(n)
    
    return str === str.split('').reverse().join('');

    // efficient way TC = O(n) SC = O(1)
    // let left = 0, right = str.length - 1;

    // while (left < right) {
    //     if (str[left] !== str[right]) {
    //         return false;
    //     }
    //     left++;
    //     right--;
    // }

    // return true;
}

console.log(palindrome("bobob"))