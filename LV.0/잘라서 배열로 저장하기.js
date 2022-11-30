function solution(my_str, n) {
    let a = []
    for (let i = 0; i < Math.ceil(my_str.length / n); i++) {
        a.push(my_str.slice(n * i, n * (i + 1)))
    }
    return a
}