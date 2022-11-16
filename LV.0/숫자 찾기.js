function solution(num, k) {
    let a = [...('' + num)]
    for (let i = 0; i < a.length; i++) {
        if (k == a[i]) {
            return i + 1;
        }
    }
    return -1
}