function solution(n) {
  let a = new Array(n).fill("");
  return a.map((x, i) => (i % 2 === 0 ? (x += "수") : (x += "박"))).join("");
}
