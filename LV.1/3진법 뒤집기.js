function solution(n) {
  let tenToThree = [];
  let answer = 0;
  while (n > 0) {
    tenToThree.push(n % 3);
    n = Math.floor(n / 3);
  }
  let threeToTen = tenToThree.reverse();
  for (let i = 0; i < threeToTen.length; i++) {
    answer += threeToTen[i] * 3 ** i;
  }
  return answer;
}
