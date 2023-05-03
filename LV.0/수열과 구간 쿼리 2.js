function solution(arr, queries) {
  const answer = [];
  for (const query of queries) {
    const [s, e, k] = query;
    answer.push(Math.min(...arr.filter((x, i) => s <= i && i <= e && k < x)));
  }
  return answer.map((x) => (Number.isInteger(x) ? x : -1));
}
