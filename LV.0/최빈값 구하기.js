function solution(array) {
  let answer = 0;
  let count = 0;
  if (array.length === 1) return array[0];
  for (let i = 0; i < array.length; i++) {
    if (array.filter((x) => x === array[i]).length > count) {
      count = array.filter((x) => x === array[i]).length;
      answer = array[i];
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array.filter((x) => x === array[i]).length === count && array[i] !== answer) return -1;
  }
  return answer;
}
