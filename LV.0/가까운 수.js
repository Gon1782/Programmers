function solution(array, n) {
    array.sort((a,b) => a - b);
    let close = 100;
    let a = 0
    for (let i of array) {
        if (Math.abs(n-i) < close) {
            close = Math.abs(n-i);
            a = i;
        }
    }
    return a;
}