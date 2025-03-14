// function steps(n) {
//     let mid = Math.floor((2 * n - 1) / 2 );
//     if (n === 0) {
//         console.log("no steps sorry :(")
//         return
//     }
//     for (let i = 0; i < n; i++){
//         let line = ''
//         for (let j = 0; j < 2 * n - 1; j++){
//             if (j >=  mid - i && j <= mid + i) {
//                 line += '#'
//             } else {
//                 line += ' '
//             }
//         }
//         console.log(line)
//     }
// }

// steps(2);

function pyramids(n) {
    let mid = Math.floor(((2 * n - 1) / 2));
    if (n === 0) {
        console.log("nhh man")
    }

    for (let i = 0; i < n; i++){
        let line = ""
        for (let j = 0; j < 2 * n - 1; j++){
            if (j >= mid - i && j <= mid + i) {
                line += "#"
            } else {
                line += " "
            }
        }
        console.log(line)
    }
}

pyramids(6);