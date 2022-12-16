function solution(k, score) {
  let hallOfFame = [];
  let answer = [];
  for (let i = 0; i < score.length; i++) {
    hallOfFame.push(score[i]);
    hallOfFame.sort((a, b) => a - b);
    if (hallOfFame.length === k + 1) {
      hallOfFame.shift();
    }
    answer.push(Math.min(...hallOfFame));
  }
  return answer;
}
