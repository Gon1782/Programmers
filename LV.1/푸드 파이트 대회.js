function solution(food) {
  let answer = "";
  let a = food.map((x) => Math.floor(x / 2));
  for (let i = 0; i < a.length; i++) {
    answer += ("" + i).repeat(a[i]);
  }
  return answer + "0" + [...answer].reverse().join("");
}
