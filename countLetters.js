function countLetters(word) {
    const letterCount = {}
    for (const letter of word.toLowerCase()) {
        if (/[a-z]/.test(letter)) {
            letterCount[letter] = (letterCount[letter] || 0) + 1;
        }
    }
    return letterCount;
}

console.log(countLetters("Mississippi"));