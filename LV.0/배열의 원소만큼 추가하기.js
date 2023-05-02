function solution(arr) {
  const answer = [];
  for (const number of arr) {
    for (let i = number; i > 0; i--) {
      answer.push(number);
    }
  }
  return answer;
}
