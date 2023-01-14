function solution(arr) {
  let LCM = arr[0];
  for (let i = 1; i < arr.length; i++) {
    for (let j = LCM; j <= LCM * arr[i]; j++) {
      if (j % arr[i] === 0 && j % LCM === 0) {
        LCM = j;
        break;
      }
    }
  }
  return LCM;
}
