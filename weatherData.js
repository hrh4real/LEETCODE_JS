const temperatures = [72, 75, 78, 77, 75, 73, 81, 79];

function analyzeTemps(temps) {
    const maximum = Math.max(...temps)
    const minimum = Math.min(...temps)

    return {
        average: temps.reduce((sum, temp) => sum + temp, 0) / temps.length,
        maximum: maximum,
        minimum: minimum,
        range: maximum - minimum
    }
}

console.log(analyzeTemps(temperatures))