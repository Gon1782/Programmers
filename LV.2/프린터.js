function solution(priorities, location) {
  const a = priorities.map((x, i) => [x, i]);
  let max = Math.max(...priorities);
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i][0] < max) {
      const b = a.shift();
      a.push(b);
      i = -1;
    } else {
      const print = a.shift();
      count += 1;
      if (print[1] === location) return count;
      max = Math.max(...a.map((x) => x[0]));
      i = -1;
    }
  }
}
