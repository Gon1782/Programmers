function solution(age) {
    let a = 'abcdefghijklmnopqrstuvwxyz'
    let b = [...a]
    let c = [...String(age)]
    let d = []
    for (let i of c)
        d.push(b[i])
    return d.join('')
}