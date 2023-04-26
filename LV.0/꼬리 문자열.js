function solution(str_list, ex) {
  return str_list.reduce((a, b) => {
    if (!b.includes(ex)) return a + b;
    else return a;
  }, "");
}
