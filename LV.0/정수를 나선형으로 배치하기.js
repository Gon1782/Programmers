function solution(n) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(new Array(n).fill(null));
  }
  let now = 1;
  let x = 0;
  let y = 0;
  let direction = "r";
  while (true) {
    if (direction === "r") {
      answer[y][x] = now;
      if (answer[y][x + 1] !== null) {
        direction = "d";
        y++;
      } else {
        x++;
      }
    } else if (direction === "d") {
      answer[y][x] = now;
      if (y + 1 === n) {
        direction = "l";
        continue;
      }
      if (answer[y + 1][x] !== null) {
        direction = "l";
        x--;
      } else {
        y++;
      }
    } else if (direction === "l") {
      answer[y][x] = now;
      if (answer[y][x - 1] !== null) {
        direction = "u";
        y--;
      } else {
        x--;
      }
    } else if (direction === "u") {
      answer[y][x] = now;
      if (answer[y - 1][x] !== null) {
        direction = "r";
        x++;
      } else {
        y--;
      }
    }
    if (now === n ** 2) break;
    now++;
  }
  return answer;
}
