function solution(my_string) {
    const a = my_string.match(/\d+/g)
    if (a) {
        return a.reduce((b, c) => b + Number(c), 0)
    } else {
        return 0
    }
}