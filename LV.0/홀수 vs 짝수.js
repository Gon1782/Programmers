function solution(num_list) {
  const odd = num_list.reduce((a, b, i) => (i % 2 === 0 ? a + b : a), 0);
  const even = num_list.reduce((a, b, i) => (i % 2 !== 0 ? a + b : a), 0);
  return Math.max(odd, even);
}
