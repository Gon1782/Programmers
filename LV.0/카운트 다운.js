function solution(start, end) {
  const count = [];
  for (let i = start; i >= end; i--) {
    count.push(i);
  }
  return count;
}
