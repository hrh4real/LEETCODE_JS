function fibonacci(n) {
    let fibonacci_sequence = [0, 1]
    for (let i = 2; i <= n; i++) {
        fibonacci_sequence.push(fibonacci_sequence[i - 1] + fibonacci_sequence[i - 2])
    }
    return fibonacci_sequence.slice(0, n);
}

console.log(fibonacci(5));