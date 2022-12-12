function solution(answers) {
  let answer = [];
  let answer1 = [1, 2, 3, 4, 5];
  let answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score1 = 0;
  let score2 = 0;
  let score3 = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === answer1[i % answer1.length]) score1++;
    if (answers[i] === answer2[i % answer2.length]) score2++;
    if (answers[i] === answer3[i % answer3.length]) score3++;
  }
  let score = [score1, score2, score3];
  for (let i = 0; i < score.length; i++) {
    if (score[i] === Math.max(...score)) answer.push(i + 1);
  }
  return answer;
}
