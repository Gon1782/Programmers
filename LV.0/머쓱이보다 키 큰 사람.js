function solution(array, height) {
    let a = 0
    for (const i in array) {
        if (array[i] > height) {
            a += 1
        }
    }
    return a
}