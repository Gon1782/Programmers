function solution(n) {
  let answer = 0;
  let i = 0;
  let j = 1;
  while (n > i) {
    if ((n - i) % j === 0) answer += 1;
    i += j;
    j += 1;
  }
  return answer;
}
