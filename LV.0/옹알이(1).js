function solution(babbling) {
  let answer = [];
  for (let i = 0; i < babbling.length; i++) {
    answer.push(babbling[i].replace(/aya|ye|woo|ma/g, ""));
  }
  return answer.filter((x) => x === "").length;
}
