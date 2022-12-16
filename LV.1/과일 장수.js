function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  for (let i = 0; i < score.length; i += m) {
    if (score.slice(i, i + m).length === m) {
      Math.min(...score.slice(i, i + m)) < k ? (answer += Math.min(...score.slice(i, i + m)) * m) : (answer += k * m);
    }
  }
  return answer;
}
