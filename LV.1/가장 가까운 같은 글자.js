function solution(s) {
  let a = [...s];
  let b = [-1];
  for (let i = 0; i < a.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (a[i] === a[j]) {
        b.push(i - j);
        break;
      } else if (j === 0) {
        b.push(-1);
      }
    }
  }
  return b;
}
