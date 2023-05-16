function solution(n, t, m, p) {
  let string = "";
  for (let i = 0; i < t * m; i++) {
    string += i.toString(n).toUpperCase();
  }
  return [...string]
    .filter((x, i) => i % m === p - 1)
    .join("")
    .slice(0, t);
}
