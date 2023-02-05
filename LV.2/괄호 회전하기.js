function solution(s) {
  let rotateStirng = s;
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const stack = [];
    for (let j = 0; j < rotateStirng.length; j++) {
      const recent = stack[stack.length - 1];
      if (recent === "[" && rotateStirng[j] === "]") stack.pop();
      else if (recent === "{" && rotateStirng[j] === "}") stack.pop();
      else if (recent === "(" && rotateStirng[j] === ")") stack.pop();
      else stack.push(rotateStirng[j]);
    }
    if (stack.length === 0) answer += 1;
    rotateStirng = rotateStirng.slice(1) + rotateStirng.slice(0, 1);
  }
  return answer;
}
