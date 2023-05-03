function solution(arr) {
  let count = 0;
  while (true) {
    const before = [...arr];
    arr = arr.map((x) => {
      if (x < 50 && x % 2 === 1) return x * 2 + 1;
      else if (x >= 50 && x % 2 === 0) return x / 2;
      else return x;
    });
    if (before.every((x, i) => x === arr[i])) break;
    count += 1;
  }
  return count;
}
