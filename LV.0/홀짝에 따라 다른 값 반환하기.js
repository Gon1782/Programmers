function solution(n) {
  let answer = 0;
  for (let i = n % 2 !== 0 ? 1 : 2; i <= n; i += 2) {
    if (n % 2 !== 0) answer += i;
    else answer += i ** 2;
  }
  return answer;
}
