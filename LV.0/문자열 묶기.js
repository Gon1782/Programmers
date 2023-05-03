function solution(strArr) {
  const length = [...new Set(strArr.map((x) => x.length))];
  return Math.max(...length.map((x) => strArr.filter((y) => y.length === x).length));
}
