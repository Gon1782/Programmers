function solution(arr, queries) {
  for (const query of queries) {
    const [a, b] = query;
    const num = arr[a];
    arr[a] = arr[b];
    arr[b] = num;
  }
  return arr;
}
