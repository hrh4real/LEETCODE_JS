function reverseInt(n) {
    const intToStr = n.toString()
    let reversed = "";
    for (let char of intToStr) {
        reversed = char + reversed;
    }

    return parseInt(reversed) * Math.sign(n)
}

console.log(reverseInt(-123))