function solution(X, Y) {
  let numX = { 9: 0, 8: 0, 7: 0, 6: 0, 5: 0, 4: 0, 3: 0, 2: 0, 1: 0, 0: 0 };
  let numY = { 9: 0, 8: 0, 7: 0, 6: 0, 5: 0, 4: 0, 3: 0, 2: 0, 1: 0, 0: 0 };
  let answer = "";
  for (let i = 0; i < X.length; i++) {
    numX[X[i]] += 1;
  }
  for (let i = 0; i < Y.length; i++) {
    numY[Y[i]] += 1;
  }
  for (let i = 9; i >= 0; i--) {
    if (numX[i] > 0 && numY[i] > 0) {
      answer += Object.keys(numX)[i].repeat(numX[i] < numY[i] ? numX[i] : numY[i]);
    }
  }
  if (answer[0] === "0") return "0";
  return answer !== "" ? answer : "-1";
}
