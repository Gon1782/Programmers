function solution(s) {
  let max = Math.max(...s.match(/\S+/g).map((x) => +x));
  let min = Math.min(...s.match(/\S+/g).map((x) => +x));
  return `${min} ${max}`;
}
