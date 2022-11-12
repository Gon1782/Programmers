function solution(n) {
    let a = 0
    for (let i = 1; i <= n; i++)
        if (n % i === 0) {
            a += 1
        }
    return a
}