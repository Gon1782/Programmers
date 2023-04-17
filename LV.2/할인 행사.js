function solution(want, number, discount) {
  let answer = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    const sale = discount.slice(i, i + 10).sort();
    let count = 0;
    for (let j = 0; j < want.length; j++) {
      if (sale.filter((x) => x === want[j]).length === number[j]) count += 1;
    }
    if (count === number.length) answer += 1;
  }
  return answer;
}
