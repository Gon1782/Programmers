function solution(m, n, startX, startY, balls) {
  const answer = [];
  for (const ball of balls) {
    const length = [];
    const x = ball[0];
    const y = ball[1];
    if (!(y === startY && x < startX)) length.push((x + startX) ** 2 + (y - startY) ** 2);
    if (!(y === startY && x > startX)) length.push((m * 2 - x - startX) ** 2 + (y - startY) ** 2);
    if (!(x === startX && y > startY)) length.push((x - startX) ** 2 + (n * 2 - y - startY) ** 2);
    if (!(x === startX && y < startY)) length.push((x - startX) ** 2 + (y + startY) ** 2);
    answer.push(Math.min(...length));
  }
  return answer;
}
