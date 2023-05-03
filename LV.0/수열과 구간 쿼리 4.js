function solution(arr, queries) {
  for (const query of queries) {
    const [s, e, k] = query;
    arr = arr.map((x, i) => (s <= i && i <= e && i % k === 0 ? x + 1 : x));
  }
  return arr;
}
