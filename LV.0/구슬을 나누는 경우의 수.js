function solution(balls, share) {
    let n = balls;
    let m = share;
    let a = 1
    let b = 1
    if (n === m) return 1
    for (let i = n - m + 1; i <= n; i++) {
        a *= i
    }
    for (let i = 1; i <= m; i++) {
        b *= i
    }
    return Math.floor(a / b)
}