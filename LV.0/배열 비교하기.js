function solution(arr1, arr2) {
  const num1 = arr1.reduce((a, b) => a + b);
  const num2 = arr2.reduce((a, b) => a + b);
  switch (true) {
    case arr1.length < arr2.length:
      return -1;
    case arr1.length > arr2.length:
      return 1;
    case num1 < num2:
      return -1;
    case num1 > num2:
      return 1;
    default:
      return 0;
  }
}
