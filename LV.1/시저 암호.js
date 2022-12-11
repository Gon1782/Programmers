function solution(s, n) {
  let ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      answer += " ";
      continue;
    }
    let AIndex = ALPHABET.indexOf(s[i]) + n;
    let aIndex = alphabet.indexOf(s[i]) + n;
    if (AIndex >= 26) AIndex -= 26;
    if (aIndex >= 26) aIndex -= 26;
    if (ALPHABET.includes(s[i])) {
      answer += ALPHABET[AIndex];
    } else {
      answer += alphabet[aIndex];
    }
  }
  return answer;
}
