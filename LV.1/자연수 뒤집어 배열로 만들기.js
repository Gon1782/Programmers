function solution(n) {
  return [...(n + "")].map((x) => +x).reverse();
}
