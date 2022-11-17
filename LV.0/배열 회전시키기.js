function solution(numbers, direction) {
    let a = []
    if (direction == 'right') {
        a.push(numbers[numbers.length-1])
        for (let i = 0; i < numbers.length-1; i++){
            a.push(numbers[i])
        }
    }
    if (direction == 'left') {
        for (let i = 0; i < numbers.length-1; i++){
            a.push(numbers[i+1])
        }
        a.push(numbers[0])
    }
    return a
}