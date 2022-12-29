function solution(s) {
  let answer = [];
  if (s.length % 2 !== 0) return 0;
  for (let i = 0; i < s.length; i++) {
    answer.push(s[i]);
    if (answer[answer.length - 1] === answer[answer.length - 2]) {
      answer.pop();
      answer.pop();
    }
  }
  return answer.join("") === "" ? 1 : 0;
}
