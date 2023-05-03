function solution(myStr) {
  return myStr.match(/[d-z]+/g) ?? ["EMPTY"];
}
