function solution(l, r) {
  const answer = [];
  for (let i = Math.floor(l / 5); i <= Math.floor(r / 5); i++) {
    const length = `${i}`.replace(/[^0|^1]/g, "").length;
    const flag = !!length && `${i}`.length === length;
    if (flag) answer.push(i * 5);
  }
  return answer.length ? answer : [-1];
}
