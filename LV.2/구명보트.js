function solution(people, limit) {
  people.sort((a, b) => a - b);
  let a = 0;
  let b = people.length - 1;
  let answer = 0;
  while (a < b) {
    if (people[a] + people[b] <= limit) {
      a += 1;
      b -= 1;
    } else {
      b -= 1;
    }
    answer += 1;
  }
  if (a === b) answer += 1;
  return answer;
}
