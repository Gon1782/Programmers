function solution(brown, yellow) {
  let a = (brown + yellow) / Math.floor(Math.sqrt(brown + yellow));
  let b = Math.floor(Math.sqrt(brown + yellow));
  for (let i = b; i > 0; i--) {
    if ((a - 2) * (b - 2) === yellow) break;
    b = i;
    a = (brown + yellow) / b;
  }
  return [a, b];
}
