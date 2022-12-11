function solution(sizes) {
  let x = [];
  let y = [];
  for (let i = 0; i < sizes.length; i++) {
    x.push(sizes[i].sort((a, b) => b - a)[0]);
    y.push(sizes[i].sort((a, b) => b - a)[1]);
  }
  return Math.max(...x) * Math.max(...y);
}
