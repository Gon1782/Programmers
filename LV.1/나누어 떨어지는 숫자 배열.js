function solution(arr, divisor) {
  if (arr.filter((x) => x % divisor === 0).length === 0) return [-1];
  return arr.filter((x) => x % divisor === 0).sort((a, b) => a - b);
}
