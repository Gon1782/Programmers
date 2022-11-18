function solution(i, j, k) {
  let count = 0;
  for (let l = i; l <= j; l++) {
    count += [...('' + l)].filter(x => +x === k).length;
  }
  return count;
}