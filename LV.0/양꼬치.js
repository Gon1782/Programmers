function solution(n, k) {
    return n * 12000 + 2000 * (k - (n - n % 10) / 10)
}