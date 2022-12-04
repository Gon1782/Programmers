function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        answer += 1;
        while (1) {
            if (answer > 2 && answer % 3 === 0 || /3/.test(answer)) {
                answer += 1
            } else {
                break
            }
        }
    }
    return answer;
}