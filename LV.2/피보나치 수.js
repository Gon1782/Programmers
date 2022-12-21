function solution(n) {
  let answer = 0;
  let x = 0;
  let y = 1;
  for (let i = 2; i <= n; i++) {
    answer = (x + y) % 1234567;
    x = y % 1234567;
    y = answer % 1234567;
  }
  if (n === 1) answer = 1;
  return answer;
}
