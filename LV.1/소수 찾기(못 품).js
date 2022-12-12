function solution(n) {
  let answer = 0;
  const arr = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; ++i) {
    if (arr[i] === 1) {
      continue;
    }
    for (let j = i * 2; j <= n; j += i) {
      arr[j] = 1;
    }
  }
  for (let i = 2; i <= n; ++i) {
    if (arr[i] === 0) {
      answer += 1;
    }
  }
  return answer;
}
