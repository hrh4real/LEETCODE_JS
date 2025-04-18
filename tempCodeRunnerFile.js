let zeroCount = 0;

    result = result.toString();
    for(let i = result.length - 1; i >= 0; i--){
        if(result[i] !== 0) break;
        zeroCount++;
    }