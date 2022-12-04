function solution(my_string) {
    const a = my_string.match(/\d+/g)
    return a ? a.reduce((b, c) => b + Number(c), 0) : 0
}