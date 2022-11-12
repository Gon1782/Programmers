function solution(s1, s2) {
    let a = 0
    for (const i of s1) {
        for (const j of s2) {
            if (i === j) {
                a += 1
            }
        }
    }
    return a
}