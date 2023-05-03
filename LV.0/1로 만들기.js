function solution(num_list) {
  let answer = 0;
  for (let num of num_list) {
    let count = 0;
    while (num > 1) {
      count += 1;
      if (num % 2 === 0) num /= 2;
      else num = (num - 1) / 2;
    }
    answer += count;
  }
  return answer;
}
