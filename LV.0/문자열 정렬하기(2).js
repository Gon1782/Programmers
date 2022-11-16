function solution(my_string) {
    let a = my_string.toLowerCase()
    return [...a].sort().join('')
}