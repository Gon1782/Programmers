function solution(a, b) {
    if (b === 1) return 1
    if (a % b === 0) return 1
    if (b % 2 !== 0 && b % 5 !== 0) return 2;
    for (let i = 2; i <= a; i++) {
        if (a % i === 0 && b % i === 0) {
            a = a / i;
            b = b / i;
        }
    }
    let num = [];
    while (b > 1) {
        for (let i = 2; i <= b; i++) {
            if (b % i === 0) {
                num.push(i);
                b = b / i;
                break;
            }
        }
    }
    let set = [...new Set(num)]
    if (set[0] === 2 && set.length < 2 || set[0] === 5 && set.length < 2) {
        return 1
    } else if (set[0] === 2 && set[1] === 5 && set.length < 3) {
        return 1
    } else {
        return 2
    }
}