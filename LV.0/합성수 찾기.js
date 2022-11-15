function solution(n) {
    let a = []
    for (let i = 4; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                a.push(i)
            }
        }
    }
    return Array.from(new Set(a)).length
}