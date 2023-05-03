function solution(a, b, c, d) {
  const numbers = [a, b, c, d];
  const set = [...new Set(numbers)];
  if (set.length === 1) return 1111 * a;
  if (set.length === 4) return Math.min(...numbers);
  if (set.length === 3) {
    const [q, r] = set.filter((x) => numbers.filter((y) => y === x).length === 1);
    return q * r;
  }
  if (set.length === 2) {
    if (set.map((x) => numbers.filter((y) => y === x).length)[0] === 2) {
      const [p, q] = set;
      return (p + q) * Math.abs(p - q);
    } else {
      const p = set.filter((x) => numbers.filter((y) => y === x).length === 3)[0];
      const q = set.filter((x) => x !== p)[0];
      return (10 * p + q) ** 2;
    }
  }
}
