function solution(x1, x2, x3, x4) {
  const a = x1 || x2 ? true : false;
  const b = x3 || x4 ? true : false;
  return a && b ? true : false;
}
