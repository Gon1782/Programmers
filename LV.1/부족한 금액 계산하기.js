function solution(price, money, count) {
  let n = 0;
  for (let i = 1; i <= count; i++) {
    n += i;
  }
  if (price * n < money) return 0;
  return price * n - money;
}
