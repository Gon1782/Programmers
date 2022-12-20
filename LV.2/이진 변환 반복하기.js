function solution(s) {
  let zero = 0;
  let count = 0;
  while (s !== "1") {
    zero += s.length - s.replace(/0/g, "").length;
    s = s.replace(/0/g, "").length.toString(2);
    count += 1;
  }
  return [count, zero];
}
