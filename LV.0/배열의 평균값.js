function solution(numbers) {
    let a = 0
    for (const i of numbers) {
        a += i
    }
    return a / numbers.length
}