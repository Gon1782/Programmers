function solution(A, B) {
  let a = A.sort((a, b) => a - b);
  let b = B.sort((a, b) => b - a);
  return a.reduce((x, y, i) => x + a[i] * b[i], 0);
}
