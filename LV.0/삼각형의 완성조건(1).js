function solution(sides) {
    let a = sides.sort(function compare(a, b) {
        return a - b;
    })
    if (a[0] + a[1] > a[2]) {
        return 1
    } else {
        return 2
    }
}