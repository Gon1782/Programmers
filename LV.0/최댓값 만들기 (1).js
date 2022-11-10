function solution(numbers) {
    let max = 0
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] * numbers[i + 1] > max) {
            max = numbers[i] * numbers[i + 1]
        }
    }
    return max
}