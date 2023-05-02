function solution(num_list, n) {
  let num = num_list.join("");
  num = num.slice(n) + num.slice(0, n);
  return [...num].map((x) => Number(x));
}
