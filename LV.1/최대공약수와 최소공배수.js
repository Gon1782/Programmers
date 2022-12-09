function solution(n, m) {
  let GCD = 0;
  let LCM = [];
  for (let i = 1; i <= m * n; i++) {
    if (m % i === 0 && n % i === 0) GCD = i;
    if (i % m === 0 && i % n === 0) LCM.push(i);
  }
  return [GCD, LCM[0]];
}
