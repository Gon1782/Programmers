function solution(a, b) {
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const 요일 = { 0: "THU", 1: "FRI", 2: "SAT", 3: "SUN", 4: "MON", 5: "TUE", 6: "WED" };
  let day;
  a === 1 ? (day = b % 7) : (day = (month.slice(0, a - 1).reduce((x, y) => x + y) + b) % 7);
  return 요일[day];
}
