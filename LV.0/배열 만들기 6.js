function solution(arr) {
  const stk = [];
  for (let i = 0; i < arr.length; i++) {
    stk.push(arr[i]);
    if (stk[stk.length - 2] === arr[i]) {
      stk.pop();
      stk.pop();
    }
  }
  return stk.length ? stk : [-1];
}
