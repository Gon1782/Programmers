function solution(binomial) {
  const splited = binomial.split(" ");
  const num1 = Number(splited[0]);
  const op = splited[1];
  const num2 = Number(splited[2]);
  if (op === "+") return num1 + num2;
  else if (op === "-") return num1 - num2;
  else return num1 * num2;
}
