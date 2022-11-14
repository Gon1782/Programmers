function solution(my_string) {
    let a = [...my_string]
    let b = []
    for (let i = 0; i < my_string.length; i++)
        if (a[i] === a[i].toUpperCase()) {
            b.push(a[i].toLowerCase())
        } else {
            b.push(a[i].toUpperCase())
        }
    return b.join('')
}