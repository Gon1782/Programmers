function solution(s) {
  let p = s.match(/p/gi);
  let y = s.match(/y/gi);
  if (p === null && y === null) return true;
  if (p === null || y === null) return false;
  return p.length === y.length ? true : false;
}
