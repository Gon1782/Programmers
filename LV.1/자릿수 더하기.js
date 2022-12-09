function solution(n) {
  if ((n + "").length < 2) return n;
  return [...(n + "")].reduce((a, b) => Number(a) + Number(b));
}
