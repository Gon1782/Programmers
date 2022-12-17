function solution(babbling) {
  let answer = [];
  for (let i = 0; i < babbling.length; i++) {
    let a = babbling[i].replace(/ayaaya|yeye|woowoo|mama/g, "1");
    answer.push(a.replace(/aya|ye|woo|ma/g, ""));
  }
  return answer.filter((x) => x === "").length;
}
