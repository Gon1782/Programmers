function solution(n) {
    let a = String(n).split('')
    let b = 0
    for (let i = 0; i < a.length; i++) {
       b += Number(a[i])
    }
    return b
}