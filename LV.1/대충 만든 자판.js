function solution(keymap, targets) {
  const answer = [];
  for (const target of targets) {
    let count = 0;
    for (const i of target) {
      const a = keymap.map((x) => x.indexOf(i) + 1).filter((x) => x !== 0);
      if (!a.length) {
        count = -1;
        break;
      }
      const sortedA = [...a].sort((a, b) => a - b);
      count += sortedA[0];
    }
    answer.push(count);
  }
  return answer;
}
