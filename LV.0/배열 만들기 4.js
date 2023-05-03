function solution(arr) {
  const stk = [];
  for (let i = 0; i < arr.length; i++) {
    while (stk.length > 0) {
      if (stk[stk.length - 1] >= arr[i]) {
        stk.pop();
      } else {
        stk.push(arr[i]);
        break;
      }
    }
    if (!stk.length) stk.push(arr[i]);
  }
  return stk;
}
