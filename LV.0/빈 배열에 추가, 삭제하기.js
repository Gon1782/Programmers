function solution(arr, flag) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (flag[i]) {
      for (let j = arr[i] * 2; j > 0; j--) {
        answer.push(arr[i]);
      }
    } else {
      answer.splice(-arr[i]);
    }
  }
  return answer;
}
