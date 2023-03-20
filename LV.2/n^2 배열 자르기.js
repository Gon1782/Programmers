function solution(n, left, right) {
  const answer = new Array(right - left + 1).fill(0);
  return answer.map((_, i) => {
    const x = ((i + left) % n) + 1;
    const y = Math.floor((i + left) / n);
    if (y + 1 >= x) return y + 1;
    else return x;
  });
}
