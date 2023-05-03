function solution(arr) {
  if (!arr.filter((x) => x === 2).length) return [-1];
  const idx = arr.map((x, i) => (x === 2 ? i : "")).filter((x) => Number.isInteger(x));
  const minIdx = Math.min(...idx);
  const maxIdx = Math.max(...idx);
  return arr.slice(minIdx, maxIdx + 1);
}
