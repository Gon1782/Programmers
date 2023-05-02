function solution(intStrs, k, s, l) {
  return intStrs.map((x) => Number(x.slice(s, s + l))).filter((x) => x > k);
}
