function solution(s) {
  if (s[0] === ")") return false;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? (count += 1) : (count -= 1);
    if (count < 0) {
      return false;
    }
  }
  return count === 0 ? true : false;
}
