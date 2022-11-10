function solution(slice, n) {
    if (n - slice > 0) {
        return Math.ceil(n / slice)
    } else {
        return 1
    }
}