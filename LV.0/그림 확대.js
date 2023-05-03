function solution(picture, k) {
  let answer = [];
  for (let i = 0; i < picture.length; i++) {
    for (let j = k; j > 0; j--) {
      answer.push([...picture[i]].map((x) => x.repeat(k)).join(""));
    }
  }
  return answer;
}
