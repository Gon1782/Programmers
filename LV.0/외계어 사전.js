function solution(spell, dic) {
    let c = []
    for (let i = 0; i < dic.length; i++) {
        let b = dic[i]
        if (b.length === spell.length) {
            for (let j = 0; j < spell.length; j++) {
                let a = new RegExp(spell[j])
                b = b.replace(a, "")
            }
        }
        c.push(b)
    }
    return c.includes("") ? 1 : 2
}