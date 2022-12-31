function solution(t, p) {
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (Number(t.slice(i, i + p.length)) <= Number(p)) count += 1;
    if (i + p.length === t.length) break;
  }
  return count;
}
