var gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
console.log(gcd(56, 42));

/* 
    while(b){
        let temp = b;
        b = a % b;
        a = temp
    }
*/