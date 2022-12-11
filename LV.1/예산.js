function solution(d, budget) {
  if (d.reduce((a, b) => a + b) <= budget) return d.length;
  let count = 0;
  let sorted = d.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (count <= budget) count += sorted[i];
    if (count > budget) return i;
  }
}
