function solution(n) {
    let a = []
    for (let i = 0; i <= n; i++) {
        if (i % 2 !== 0) {
            a.push(i)
        }
    }
    return a
}