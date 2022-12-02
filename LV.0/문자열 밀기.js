function solution(A, B) {
    let a = A
    if (A === B) return 0
    for (let i = 1; i < A.length; i++) {
        a = a.slice(-1) + a.slice(0, -1)
        if (a === B) {
            return i
        }
    }
    return -1
}