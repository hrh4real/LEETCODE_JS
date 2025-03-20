/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let callCount = 0;
    const cache = {}
    return function(...args) {
        const key = JSON.stringify(args);
        if(!(key in cache)){
            cache[key] = fn(...args);
            callCount++
        }
        return cache[key];
    }
    return callCount;
}
