function solution(msg) {
  let answer = [];
  let obj = {};
  let num = 27;
  for (let i = 1; i <= 26; i++) {
    obj[String.fromCharCode(i + 64)] = i;
  }
  for (let i = 0; i < msg.length; i++) {
    for (let j = msg.length; j > i; j--) {
      const a = msg.slice(i, j);
      if (!!obj[a]) {
        answer.push(obj[a]);
        obj[msg.slice(i, j + 1)] = num;
        num++;
        i = j - 1;
      }
    }
  }
  return answer;
}
