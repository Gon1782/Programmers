function solution(s, skip, index) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const skipWord = skip.split("");
  let skippedAlphabet = alphabet.join("");
  for (const i of skipWord) {
    skippedAlphabet = skippedAlphabet.replace(i, "");
  }
  skippedAlphabet = skippedAlphabet.split("");
  const c = s.split("");
  const d = [];
  for (let i = 0; i < c.length; i++) {
    let e = b.indexOf(c[i]) + index;
    if (e >= b.length) e %= b.length;
    d.push(b[e]);
  }
  return d.join("");
}
