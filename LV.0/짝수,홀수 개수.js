function solution(num_list) {
    let a = 0
    let b = 0
    for (const i in num_list) {
        if (num_list[i] % 2 == 0) {
            a += 1
        }
        else {
            b += 1
        }
    }
    return [a, b]
}