function solution(N, stages) {
  let answer = [];
  let a = stages.length;
  for (let i = 1; i <= N; i++) {
    answer.push([i, stages.filter((x) => x === i).length / a]);
    a -= stages.filter((x) => x === i).length;
  }
  return answer.sort((a, b) => b[1] - a[1]).map((x) => x[0]);
}
