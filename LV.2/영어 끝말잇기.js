function solution(n, words) {
  let duplication = [words[0]];
  let answer = 0;
  for (let i = 0; i < words.length - 1; i++) {
    if (words[i].slice(-1) !== words[i + 1].slice(0, 1)) {
      answer = i + 2;
      break;
    }
    if (!duplication.includes(words[i + 1])) {
      duplication.push(words[i + 1]);
    } else {
      answer = i + 2;
      break;
    }
  }
  if (answer === 0) return [0, 0];
  return answer % n === 0 ? [n, answer / n] : [answer % n, Math.ceil(answer / n)];
}
