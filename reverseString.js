function reverse(str) {
    let reversed = ""
    for (let char of str){
        reversed = char + reversed
    }
    return reversed;
    // OR
    // return str.split('').reverse().join('')
}

console.log(reverse("props"));