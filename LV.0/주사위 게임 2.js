function solution(a, b, c) {
  switch (true) {
    case a === b && b === c:
      return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
    case a === b || b === c || c === a:
      return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
    default:
      return a + b + c;
  }
}
