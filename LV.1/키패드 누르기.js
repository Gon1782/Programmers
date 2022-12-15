function solution(numbers, hand) {
  const number = { "*": [-1, 0], 0: [0, 0], "#": [1, 0], 7: [-1, 1], 8: [0, 1], 9: [1, 1], 4: [-1, 2], 5: [0, 2], 6: [1, 2], 1: [-1, 3], 2: [0, 3], 3: [1, 3] };
  let left = [-1, 0];
  let right = [1, 0];
  let answer = "";
  for (let i = 0; i < numbers.length; i++) {
    if (number[numbers[i]][0] === -1) {
      answer += "L";
      left = number[numbers[i]];
    } else if (number[numbers[i]][0] === 1) {
      answer += "R";
      right = number[numbers[i]];
    } else {
      let lx = Math.abs(left[0] - number[numbers[i]][0]);
      let ly = Math.abs(left[1] - number[numbers[i]][1]);
      let rx = Math.abs(right[0] - number[numbers[i]][0]);
      let ry = Math.abs(right[1] - number[numbers[i]][1]);
      if (lx + ly < rx + ry) {
        answer += "L";
        left = number[numbers[i]];
      } else if (lx + ly > rx + ry) {
        answer += "R";
        right = number[numbers[i]];
      } else {
        if (hand === "left") {
          answer += "L";
          left = number[numbers[i]];
        } else {
          answer += "R";
          right = number[numbers[i]];
        }
      }
    }
  }
  return answer;
}
