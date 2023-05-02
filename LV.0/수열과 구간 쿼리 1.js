function solution(arr, queries) {
  for (const query of queries) {
    const [a, b] = query;
    arr = arr.map((x, i) => {
      if (i >= a && i <= b) return x + 1;
      else return x;
    });
  }
  return arr;
}
