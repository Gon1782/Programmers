function solution(cipher, code) {
    let a = [...'' + cipher]
    let b = []
    for (let i = 1; i <= a.length; i++) {
        if (i % code === 0) {
            b.push(a[i - 1])
        }
    }
    return b.join('')
}