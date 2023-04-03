function solution(n, k) {
  const numbers = n.toString(k).split("0");
  let answer = 0;
  for (const number of numbers) {
    let check = true;
    if (!number || number === "1") continue;
    for (let num = 2; num <= Math.sqrt(number); num++) {
      if (number % num === 0) check = false;
    }
    if (check) answer += 1;
  }
  return answer;
}
