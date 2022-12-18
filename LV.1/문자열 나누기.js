function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    let x = s[i];
    let countX = 1;
    let other = 0;
    for (let j = i + 1; j < s.length; j++) {
      s[j] === x ? countX++ : other++;
      i = j;
      if (countX === other) break;
    }
    answer++;
  }
  return answer;
}
