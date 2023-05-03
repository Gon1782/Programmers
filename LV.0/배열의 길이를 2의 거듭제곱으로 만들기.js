function solution(arr) {
  let length = 1;
  while (true) {
    if (length >= arr.length) {
      const lack = new Array(length - arr.length).fill(0);
      return arr.concat(lack);
    }
    length *= 2;
  }
}
