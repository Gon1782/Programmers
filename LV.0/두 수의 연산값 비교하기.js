function solution(a, b) {
  const answer = [];
  answer.push(Number(`${a}${b}`));
  answer.push(2 * a * b);
  return Math.max(...answer);
}
