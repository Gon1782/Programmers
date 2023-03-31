function solution(name, yearning, photo) {
  const obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }
  const answer = [];
  for (const people of photo) {
    const score = people.map((person) => obj[person] ?? 0);
    answer.push(score.reduce((a, b) => a + b));
  }
  return answer;
}
