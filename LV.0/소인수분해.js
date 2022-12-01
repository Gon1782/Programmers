function solution(n) {
    let a = []
    while (n > 1) {
        for (let i = 2; i <= n; i++) {
            if (n % i === 0) {
                a.push(i);
                n = n / i
                break;
            }
        }
    }
    return [...new Set(a)]
}