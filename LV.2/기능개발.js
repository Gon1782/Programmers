function solution(progresses, speeds) {
  const answer = [];
  const stack = [Math.ceil((100 - progresses[0]) / speeds[0])];
  let count = 1;
  let idx = 0;
  for (let i = 1; i < progresses.length; i++) {
    const num = Math.ceil((100 - progresses[i]) / speeds[i]);
    if (stack[idx] >= num) {
      count += 1;
    } else {
      answer.push(count);
      stack.push(num);
      count = 1;
      idx += 1;
    }
    if (i === progresses.length - 1) answer.push(count);
  }
  return answer;
}
