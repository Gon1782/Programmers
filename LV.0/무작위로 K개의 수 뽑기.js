function solution(arr, k) {
  const numbers = [...new Set(arr)];
  const answer = new Array(k).fill(0).map((x, i) => numbers[i] ?? -1);
  return answer;
}
