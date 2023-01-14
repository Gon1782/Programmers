function solution(n, a, b) {
  let round = 1;
  if (a % 2 === 0 && a - 1 === b) return 1;
  if (a % 2 !== 0 && a + 1 === b) return 1;
  while (n !== 1) {
    n = n / 2;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round += 1;
    if (a % 2 === 0 && a - 1 === b) break;
    if (a % 2 !== 0 && a + 1 === b) break;
  }
  return round;
}
