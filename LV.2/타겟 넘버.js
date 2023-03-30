function solution(numbers, target) {
  let answer = 0;

  const DFS = (i, number) => {
    if (i === numbers.length) {
      if (number === target) {
        answer += 1;
      }
    } else {
      DFS(i + 1, number + numbers[i]);
      DFS(i + 1, number - numbers[i]);
    }
  };

  DFS(0, 0);
  return answer;
}
