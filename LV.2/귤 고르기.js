function solution(k, tangerine) {
  const obj = {};
  tangerine.forEach((x) => {
    const num = obj[x] ?? 0;
    obj[x] = num + 1;
  });
  const numbers = Object.values(obj).sort((a, b) => b - a);
  let answer = 0;
  for (const num of numbers) {
    answer += 1;
    k -= num;
    if (k <= 0) return answer;
  }
}
