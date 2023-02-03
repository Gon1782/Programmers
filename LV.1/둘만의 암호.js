function solution(s, skip, index) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const skipWord = skip.split("");
  let skippedAlphabet = alphabet.join("");
  for (const i of skipWord) {
    skippedAlphabet = skippedAlphabet.replace(i, "");
  }
  skippedAlphabet = skippedAlphabet.split("");
  const word = s.split("");
  const answer = [];
  for (let i = 0; i < c.length; i++) {
    let idx = skippedAlphabet.indexOf(word[i]) + index;
    if (idx >= skippedAlphabet.length) idx %= skippedAlphabet.length;
    answer.push(skippedAlphabet[idx]);
  }
  return answer.join("");
}
