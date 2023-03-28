function solution(str1, str2) {
  const set1 = [];
  const set2 = [];
  for (let i = 0; i < str1.length - 1; i++) {
    const twoWord = str1[i] + str1[i + 1];
    if (twoWord.match(/[a-z]/gi)?.length === 2) set1.push(twoWord.toUpperCase());
  }
  let same = 0;
  for (let i = 0; i < str2.length - 1; i++) {
    const twoWord = str2[i] + str2[i + 1];
    if (twoWord.match(/[a-z]/gi)?.length === 2) set2.push(twoWord.toUpperCase());
    if (set1.includes(twoWord.toUpperCase())) {
      const idx = set1.indexOf(twoWord.toUpperCase());
      set1.splice(idx, 1);
      same += 1;
    }
  }
  const all = set1.length + set2.length;
  if (all === 0) return 65536;
  return Math.floor((same / all) * 65536);
}
