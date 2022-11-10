function solution(sides) {
    let a = sides.reverse();
    if (a[0] < a[1] + a[2]) {
        return 1
    } else {
        return 2
    }
}

console.log([1, 2, 3].sort(function compare(a, b) {
    return a - b;
}));
console.log([3, 6, 2].sort(function compare(a, b) {
    return a - b;
}));
console.log([199, 72, 222].sort(function compare(a, b) {
    return a - b;
}));
