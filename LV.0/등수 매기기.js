function solution(score) {
    let sum = []
    for (let i of score) {
        sum.push(i.reduce((a, b) => a + b))
    }
    let sortSum = [...sum].sort((a, b) => b - a)
    return sum.map((x) => sortSum.indexOf(x) + 1)
}