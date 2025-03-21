// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(n) {
    if (n === 0) {
        console.log("no steps sorry :(")
    }
    for (let i = 1; i <= n; i++){
        let line = ""
        for (let j = 1; j <= n; j++){
            if (j <= i) {
                line += '#'
            } else {
                line += " "
            }
        }
        console.log(line)
    }
}

steps(6);
