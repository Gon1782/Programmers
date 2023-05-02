function solution(numLog) {
  let answer = "";
  for (let i = 0; i < numLog.length - 1; i++) {
    const gap = numLog[i + 1] - numLog[i];
    if (gap === 1) answer += "w";
    else if (gap === -1) answer += "s";
    else if (gap === 10) answer += "d";
    else if (gap === -10) answer += "a";
  }
  return answer;
}
