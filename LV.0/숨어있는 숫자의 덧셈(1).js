function solution(my_string) {
    let a = [...my_string]
    let b = 0
    for (let i = 0; i < a.length; i++) {
        if (Number.isInteger(Number(a[i]))) {
            b += Number(a[i])
        }
    }
    return b
}