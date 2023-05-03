function solution(my_string) {
  const answer = new Array(52).fill(0);
  for (const letter of my_string) {
    if (letter === letter.toUpperCase()) {
      const i = letter.charCodeAt(0) - 65;
      answer[i] += 1;
    } else {
      const i = letter.charCodeAt(0) - 71;
      answer[i] += 1;
    }
  }
  return answer;
}
