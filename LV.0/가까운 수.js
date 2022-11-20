function solution(array, n) {
    let close = Math.abs(n - array[0]);
    for (let i = 0; i < array.length; i++) {
        if (Math.abs(n - array[i]) === 0) {
            return array[i]
        } else if (close > Math.abs(n - array[i])) {
            close = array[i]
        }
    }
    return close
}