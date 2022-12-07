function solution(num, total) {
  let answer = [];
  let n = Math.floor(total / num);
  for (let i = Math.round(-num / 2); i < Math.round(num / 2); i++) {
    num % 2 === 0 ? answer.push(n + 1 + i) : answer.push(n + i);
  }
  return answer;
}
