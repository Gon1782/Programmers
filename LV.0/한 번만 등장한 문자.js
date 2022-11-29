function solution(s) {
    let a = [...s];
    let b = []
    for (let i = 0; i < a.length; i++) {
        let c = a[i]
        let d = new RegExp(c, "g");
        if (s.replace(d, '').length === s.length - 1) {
            b.push(a[i])
        }
    }
    return b.sort().join('')
}