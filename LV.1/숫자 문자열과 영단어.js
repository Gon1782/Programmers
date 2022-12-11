function solution(s) {
  const num = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
  for (let i = 0; i < Object.keys(num).length; i++) {
    let changeNum = new RegExp(Object.keys(num)[i], "g");
    s = s.replace(changeNum, Object.values(num)[i]);
  }
  return +s;
}
