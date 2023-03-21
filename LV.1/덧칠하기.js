function solution(_, m, section) {
  let answer = 0;
  let paint = 0;
  for (const i of section) {
    if (paint < i) {
      answer += 1;
      paint = i + m - 1;
    }
  }
  return answer;
}
