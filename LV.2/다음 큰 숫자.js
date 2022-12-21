function solution(n) {
  let one = [...n.toString(2)].filter((x) => x === "1").length;
  let i = n + 1;
  while (1) {
    if ([...i.toString(2)].filter((x) => x === "1").length === one) break;
    i++;
  }
  return i;
}
