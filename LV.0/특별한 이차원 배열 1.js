function solution(n) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    const arr = new Array(n).fill(0).map((_, idx) => (idx === i ? 1 : 0));
    answer.push(arr);
  }
  return answer;
}
